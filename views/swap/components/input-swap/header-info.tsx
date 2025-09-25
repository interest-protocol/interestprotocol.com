import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { InputProps } from './input.types';

const HeaderInfo: FC<InputProps> = ({ label }) => {
  const labelText = label === 'from' ? 'Sell' : 'Buy';

  return (
    <Div
      display="flex"
      justifyContent="space-between"
      color="#E2E2E6"
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
      </P>
    </Div>
  );
};

export default HeaderInfo;
