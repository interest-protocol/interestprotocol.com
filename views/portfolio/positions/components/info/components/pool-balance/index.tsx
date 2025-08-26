import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

const PoolBalance: FC = () => (
  <Div display="flex" flexDirection="column">
    <P color="#9CA3AF" fontSize="0.875rem" fontWeight="400" fontFamily="Inter">
      Pool Balances
    </P>

    <Div
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Div></Div>
    </Div>
  </Div>
);

export default PoolBalance;
