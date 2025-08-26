import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { InputProps } from './input.types';

const AmountInDollar: FC<InputProps> = ({ label }) => {
  if (label == 'token') return '--';

  return (
    <Div display="flex" gap="0.75rem" alignItems="center" flexWrap="wrap">
      <P fontSize="0.875rem" color="#D1D5DB">
        --
      </P>
    </Div>
  );
};

export default AmountInDollar;
