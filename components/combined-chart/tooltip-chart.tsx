import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { formatMoney } from '@/utils';

import { TooltipChartProps } from './combined-chart.types';

const TooltipChart: FC<TooltipChartProps> = ({
  label,
  title,
  active,
  payload,
  showPayloadWithName,
}) => {
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
            {title ? `${title}: ${label}` : `${label}`}
          </P>
        </Div>

        {payload.map(({ color, value, name }) => (
          <Div
            key={v4()}
            gap="1rem"
            mb="0.5rem"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Div display="flex" alignItems="center" gap="0.5rem">
              {color && !color.startsWith('url') && (
                <Div
                  width="1rem"
                  height="1rem"
                  borderRadius="5px"
                  style={{ backgroundColor: color }}
                />
              )}

              <Span
                color="#fff"
                fontWeight="700"
                fontFamily="Inter"
                fontSize="0.875rem"
                textTransform="capitalize"
              >
                {`${showPayloadWithName ? name + ': ' : ''} ${formatMoney(value)}`}
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
