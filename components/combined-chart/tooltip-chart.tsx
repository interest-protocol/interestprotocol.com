import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TooltipChartProps } from './combined-chart.types';

const TooltipChart: FC<TooltipChartProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Div
        p="1rem"
        bg="#ffffff1a"
        borderRadius="1rem"
        backdropFilter="blur(12px)"
        border="1px solid #ffffff33"
        boxShadow="0 20px 25px #00000040"
      >
        <Div display="flex" alignItems="center" gap="0.5rem" mb="0.75rem">
          <P color="#fff" fontWeight="bold" fontSize="1rem">
            {label}
          </P>
        </Div>

        {payload.map(({ color, value }) => (
          <Div
            key={v4()}
            gap="1rem"
            mb="0.5rem"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Div display="flex" alignItems="center" gap="0.5rem">
              <Div
                width="1rem"
                height="1rem"
                borderRadius="5px"
                style={{ backgroundColor: color }}
              />
              <Span
                color="#fff"
                fontWeight="700"
                fontFamily="Inter"
                fontSize="0.875rem"
              >
                {value}
              </Span>
            </Div>
          </Div>
        ))}
      </Div>
    );
  }

  return null;
};

export default TooltipChart;
