import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { PlusSVG } from '@/components/svg';

import Input from '../components/input';
import PoolFormButton from '../pool-form-button';
import DepositBalanced from './deposit-balanced';

const PoolFormDeposit: FC = () => (
  <Div display="flex" flexDirection="column" gap="0.75rem">
    <Div display="flex" flexDirection="column" gap="0.35rem">
      <Input field="tokenList.0" label="You pay" />
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
          bg="#030712"
          width="2.25rem"
          height="2.25rem"
          cursor="pointer"
          alignItems="center"
          borderRadius="0.75rem"
          justifyContent="center"
        >
          <PlusSVG
            width="0.65rem"
            color="#9CA3AF"
            maxWidth="0.65rem"
            maxHeight="0.65rem"
          />
        </Div>
      </Div>
      <Input field="tokenList.1" label="You pay" />
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
      <Input field="lpCoin" label="You get" shortView readonly />
    </Div>
    <DepositBalanced />
    <PoolFormButton isDeposit />
  </Div>
);

export default PoolFormDeposit;
