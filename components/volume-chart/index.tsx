import { FC } from 'react';
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import TooltipChart from '../combined-chart/tooltip-chart';
import { VolumeChartProps } from './volume-chart.types';

const VolumeChart: FC<VolumeChartProps> = ({ data }) => (
  <ResponsiveContainer>
    <BarChart data={data}>
      <XAxis
        axisLine={false}
        tickLine={false}
        dataKey="name"
        stroke="#9CA3AF"
        tick={{ fontSize: 12, fill: '#9CA3AF' }}
      />
      <YAxis hide />
      <Tooltip
        cursor={{
          opacity: 0.5,
          strokeWidth: 1,
          fill: 'transparent',
          strokeDasharray: '1 5',
        }}
        content={<TooltipChart />}
      />
      <Bar
        barSize={8}
        dataKey="value"
        fill="#2b59da66"
        radius={[4, 4, 0, 0]}
        activeBar={<Rectangle fill="#2A5ADA" stroke="#2A5ADA" />}
      />
    </BarChart>
  </ResponsiveContainer>
);

export default VolumeChart;
