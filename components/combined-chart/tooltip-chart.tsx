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
  labelMap = {},
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

        {payload
          .filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.name === item.name)
          )
          .map(({ color, value, name }) => {
            const displayName = labelMap[name] ?? name;

            return (
              <Div key={v4()} display="flex" justifyContent="space-between">
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
                    {`${displayName}: ${formatMoney(value)}`}
                  </Span>
                </Div>
              </Div>
            );
          })}
      </Div>
    );
  }

  return null;
};

export default TooltipChart;
