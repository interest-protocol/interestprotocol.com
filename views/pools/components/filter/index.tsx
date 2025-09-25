import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { FilterProps } from './filter.types';

const Filter: FC<FilterProps> = ({ interval, setInterval, options }) => (
  <Div
    width="max"
    gap="0.5rem"
    display="flex"
    bg="#9CA3AF1A"
    height="2.25rem"
    p="0.25rem 0.5rem"
    borderRadius="9999rem"
    border="1px solid #9CA3AF1A"
  >
    {options.map((intendedInterval) => (
      <Div
        display="flex"
        fontSize="0.875rem"
        alignItems="center"
        borderRadius="9999rem"
        key={intendedInterval}
        padding="0.25rem 0.5rem"
        onClick={() => setInterval(intendedInterval)}
        color={interval === intendedInterval ? '#FFFFFF' : '#9CA3AF'}
        pointerEvents={interval === intendedInterval ? 'none' : undefined}
        backgroundColor={
          interval === intendedInterval ? '#9CA3AF33' : 'transparent'
        }
        style={{
          cursor: interval === intendedInterval ? 'default' : 'pointer',
        }}
      >
        {intendedInterval}
      </Div>
    ))}
  </Div>
);

export default Filter;
