import { FC } from 'react';
import { Div, P, Span } from '@stylin.js/elements';
import { useFormContext, useWatch } from 'react-hook-form';

import { InputProps } from './input.types';

const HeaderInfo: FC<InputProps> = ({ label }) => {
  const form = useFormContext();

  const symbol = useWatch({ control: form.control, name: `${label}.symbol` });

  const labelText = label === 'from' ? 'Sell' : 'Buy';

  return (
    <Div
      display="flex"
      justifyContent="space-between"
      color="onSurface"
      alignItems="flex-end"
    >
      <P
        color="#9CA3AF"
        fontFamily="Inter"
        fontSize="0.875rem"
        fontWeight="400"
        lineHeight="1.25rem"
      >
        {labelText}
        <Span
          fontFamily="Inter"
          fontSize="0.875rem"
          fontWeight="400"
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
