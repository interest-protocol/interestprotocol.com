import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';

const Filter: FC = () => {
  const [interval, setInterval] = useState<'1W' | '1M' | '3M' | '1Y'>('1M');
  return (
    <Div
      gap="0.5rem"
      bg="#9CA3AF1A"
      display="flex"
      height="2.25rem"
      width="11rem"
      p="0.25rem 0.5rem"
      borderRadius="9999rem"
      border="1px solid #9CA3AF1A"
    >
      {(['1W', '1M', '3M', '1Y'] as const).map((intendedInterval) => (
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
};

export default Filter;
