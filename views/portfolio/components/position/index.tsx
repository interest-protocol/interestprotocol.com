import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { PositionProps } from './position.types';

const Position: FC<PositionProps> = ({ type, value }) => {
  let displayValue: number | string = value;

  if (value > 0) {
    if (type === 'pools') {
      displayValue = value;
    } else {
      displayValue = `${value} in Range`;
    }
  }

  return (
    <Div
      gap="0.5rem"
      display="flex"
      bg="#9CA3AF1A"
      p="0.75rem 1rem"
      alignItems="center"
      borderRadius="0.75rem"
      border="1px solid #9CA3AF1A"
    >
      <P color="#9CA3AF" fontSize="1rem" fontWeight="500" fontFamily="Inter">
        Position:
      </P>
      <Span color="#34D399" fontSize="1rem" fontWeight="500" fontFamily="Inter">
        {displayValue}
      </Span>
    </Div>
  );
};

export default Position;
