import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { TotalAprHeaderProps } from './total-apr-header.types';

const TotalAprHeader: FC<TotalAprHeaderProps> = ({ totalApr, ...props }) => (
  <Div alignItems="center" justifyContent="space-between" {...props}>
    <P
      fontSize="1rem"
      color="#FFFFFF"
      fontWeight="500"
      fontFamily="Inter"
      lineHeight="1.75rem"
    >
      Total APR
    </P>
    <P
      fontSize="1rem"
      color="#B4C5FF"
      fontWeight="500"
      fontFamily="Inter"
      lineHeight="1.75rem"
    >
      {totalApr.toFixed(2)}%
    </P>
  </Div>
);

export default TotalAprHeader;
