import { FC } from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import { v4 } from 'uuid';

import { CombinedChartProps } from './combined-chart.types';
import TooltipChart from './tooltip-chart';

const CombinedChart: FC<CombinedChartProps> = ({ charts, data, xDataKey }) => (
  <ResponsiveContainer
    width="100%"
    height="100%"
    style={{ background: '#000' }}
  >
    <ComposedChart
      data={data}
      width={500}
      height={400}
      margin={{
        top: 20,
        left: 10,
        right: 10,
        bottom: 20,
      }}
    >
      <defs>
        <linearGradient id="ColorArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ffffff8d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ffffff8d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="1 20" opacity={0.4} />
      <XAxis dataKey={xDataKey} />
      <Tooltip
        cursor={{
          opacity: 0.5,
          strokeWidth: 1,
          strokeDasharray: '1 5',
        }}
        content={<TooltipChart />}
      />
      {charts.bar.map((barItem) => (
        <Bar
          key={v4()}
          barSize={6}
          fill={barItem.color}
          dataKey={barItem.dataKey}
          radius={[10, 10, 0, 0]}
        />
      ))}
      {charts.area.map((areaItem) => (
        <Area
          key={v4()}
          type="natural"
          fillOpacity={1}
          strokeWidth={2}
          fill="url(#ColorArea)"
          stroke={areaItem.color}
          dataKey={areaItem.dataKey}
        />
      ))}
    </ComposedChart>
  </ResponsiveContainer>
);

export default CombinedChart;
