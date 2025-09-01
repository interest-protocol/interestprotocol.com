import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { InputProps } from '../input.types';

const HeaderInfo: FC<InputProps> = ({ index }) => {
  const symbol = useWatch({ name: `tokens.${index}.symbol` });

  return (
    <Div
      alignItems="flex-end"
      justifyContent="space-between"
      display={['flex', 'none']}
    >
      <Span
        fontFamily="Inter"
        fontSize="0.875rem"
        fontWeight="400"
        lineHeight="1.25rem"
        color="#FFFFFF"
      >
        {symbol}
      </Span>
    </Div>
  );
};

export default HeaderInfo;
