import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { PlusSVG } from '@/components/svg';
import { ToggleButton } from '@/components/toggle';
import { noop } from '@/utils';

import Input from './components/input';

const PoolFormDeposit: FC = () => (
  <Div display="flex" flexDirection="column" gap="0.75rem">
    <Div display="flex" flexDirection="column" gap="0.35rem">
      <Input field="tokenList.0" label="You pay" />
      <Div
        my="-1.3rem"
        zIndex="10"
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
        zIndex="10"
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
    <Div display="flex" justifyContent="space-between" alignItems="center">
      <P fontWeight="400" fontSize="1rem" lineHeight="1.125rem" color="#fff">
        Balanced
      </P>
      <ToggleButton defaultValue={false} name="balanced" onClick={noop} />
    </Div>
    <Button
      border="none"
      display="flex"
      p="0.5rem 1rem"
      height="3.5rem"
      fontSize="1rem"
      fontWeight="500"
      cursor="pointer"
      color="#002A78"
      fontFamily="Inter"
      alignItems="center"
      background="#B4C5FF"
      borderRadius="0.75rem"
      justifyContent="center"
    >
      Connect Wallet
    </Button>
  </Div>
);

export default PoolFormDeposit;
