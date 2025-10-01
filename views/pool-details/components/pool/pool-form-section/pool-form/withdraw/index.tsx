import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Input from '../components/input';
import PoolFormButton from '../pool-form-button';
import WithdrawReceive from './withdraw-receive';

const PoolFormWithdraw: FC = () => (
  <Div display="flex" flexDirection="column" gap="0.75rem">
    <Div display="flex" flexDirection="column" gap="0.35rem">
      <Input field="lpCoin" label="You give" />
      <Div
        my="-1.3rem"
        zIndex="100"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Div
          p="0.75rem"
          display="flex"
          bg="#B4C5FF"
          width="2.25rem"
          height="2.25rem"
          cursor="pointer"
          alignItems="center"
          borderRadius="0.75rem"
          justifyContent="center"
        />
      </Div>
      <WithdrawReceive />
    </Div>
    <PoolFormButton isDeposit={false} />
  </Div>
);

export default PoolFormWithdraw;
