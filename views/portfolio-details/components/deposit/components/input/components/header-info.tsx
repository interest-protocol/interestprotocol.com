import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { InputProps } from '../input.types';

const HeaderInfo: FC<InputProps> = ({ index }) => {
  const symbol = useWatch({ name: `tokens.${index}.symbol` });

  return (
    <Div display="flex" alignItems="flex-end" justifyContent="space-between">
      <P
        color="#9CA3AF"
        fontWeight="400"
        fontFamily="Inter"
        fontSize="0.868rem"
        lineHeight="1.25rem"
      >
        You pay
        <Span
          fontWeight="400"
          fontFamily="Inter"
          fontSize="0.875rem"
          lineHeight="1.25rem"
          display={['inline-block', 'none']}
        >
          : {symbol}
        </Span>
      </P>
    </Div>
  );
};

export default HeaderInfo;
