import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { ChartProps } from './chart.types';

const Chart: FC<ChartProps> = ({ data, colors }) => (
  <Div width="6rem" height="6rem">
    <ResponsiveContainer>
      <PieChart>
        <Pie data={data} innerRadius={30} outerRadius={45} dataKey="value">
          {data.map((_, index) => (
            <Cell
              fill={colors[index]}
              key={`cell-${index}`}
              style={{ border: 'none', outline: 'none' }}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </Div>
);

export default Chart;
