import { Div } from '@stylin.js/elements';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import TooltipChart from '@/components/combined-chart/tooltip-chart';

import { DataPoint, LiquidityChartProps } from './liquidity-chart.types';
import LiquidityGradient from './liquidity-gradient';
import RangeHandle from './range-handle';

const LiquidityChart: FC<LiquidityChartProps> = ({
  data,
  initialMin,
  initialMax,
}) => {
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);
  const [dragging, setDragging] = useState<'min' | 'max' | null>(null);

  const min = data[0].price;
  const max = data[data.length - 1].price;

  const calcPosition = (price: number) => ((price - min) / (max - min)) * 100;
  const calcPriceFromX = (clientX: number, rect: DOMRect) =>
    min + ((clientX - rect.left) / rect.width) * (max - min);

  const { minPercent, maxPercent } = useMemo(() => {
    return {
      minPercent: calcPosition(minPrice),
      maxPercent: calcPosition(maxPrice),
    };
  }, [minPrice, maxPrice, min, max]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return;
      const container = document.getElementById('chart-container');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const newPrice = calcPriceFromX(e.clientX, rect);

      if (dragging === 'min' && newPrice < maxPrice) {
        setMinPrice(Math.max(min, newPrice));
      } else if (dragging === 'max' && newPrice > minPrice) {
        setMaxPrice(Math.min(max, newPrice));
      }
    },
    [dragging, minPrice, maxPrice, min, max]
  );

  const stopDragging = useCallback(() => setDragging(null), []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDragging);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
    };
  }, [handleMouseMove, stopDragging]);

  return (
    <Div width="100%" height="12.5rem" id="chart-container" position="relative">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data as DataPoint[]}>
          <XAxis
            type="number"
            dataKey="price"
            domain={['dataMin', 'dataMax']}
            tick={{ fill: '#9CA3AF' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip
            cursor={{
              opacity: 0.5,
              strokeWidth: 1,
              strokeDasharray: '1 5',
            }}
            content={<TooltipChart title="Price" showPayloadWithName />}
          />

          <LiquidityGradient minPercent={minPercent} maxPercent={maxPercent} />

          <Area
            stroke="none"
            type="stepAfter"
            dataKey="liquidity"
            fill="url(#liquidityFill)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <RangeHandle
        price={minPrice}
        type="min"
        calcPosition={calcPosition}
        onMouseDown={setDragging}
      />
      <RangeHandle
        price={maxPrice}
        type="max"
        calcPosition={calcPosition}
        onMouseDown={setDragging}
      />
    </Div>
  );
};

export default LiquidityChart;
