import { Div, DivProps } from '@stylin.js/elements';
import { FC } from 'react';

import { FilterProps } from './filter.types';

const Filter: FC<FilterProps & DivProps> = ({
  interval,
  setInterval,
  options,
  labels,
  ...rest
}) => (
  <Div
    width="max"
    gap="0.5rem"
    display="flex"
    bg="#9CA3AF1A"
    minHeight="2.25rem"
    p="0.25rem 0.5rem"
    borderRadius="9999rem"
    border="1px solid #9CA3AF1A"
    {...rest}
  >
    {options.map((intendedInterval, index) => (
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
        {labels ? labels[index] || intendedInterval : intendedInterval}
      </Div>
    ))}
  </Div>
);

export default Filter;
