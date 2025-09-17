import { FC } from 'react';
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { VolumeChartProps } from './volume-chart.types';

const VolumeChart: FC<VolumeChartProps> = ({ data }) => (
  <ResponsiveContainer>
    <BarChart data={data}>
      <XAxis
        axisLine={false}
        tickLine={false}
        dataKey="time"
        stroke="#9CA3AF"
        tick={{ fontSize: 12, fill: '#9CA3AF' }}
      />
      <YAxis hide />
      <Tooltip
        itemStyle={{ color: '#FFFFFF' }}
        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
        contentStyle={{
          background: '#1e293b',
          border: 'none',
          color: '#FFFFFF',
        }}
      />

      <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={8}>
        {data.map((_, index) => (
          <Cell
            key={`cell-${index}`}
            fill={index < 4 ? '#2A5ADA' : 'rgba(42,90,218,0.4)'}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default VolumeChart;
