import { Button, Div, Hr } from '@stylin.js/elements';
import { FC } from 'react';

import { ToggleButton } from '@/components/toggle';
import { noop } from '@/utils';

import Input from './components/input';

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
      <Div
        p="1rem"
        pt={['1.5rem', '1.5rem', '1.5rem', '1rem']}
        gap="1rem"
        display="flex"
        bg="#9CA3AF1A"
        flexDirection="column"
        borderRadius="0.75rem"
        boxShadow=" 0px 0px 0px 1px #F3F4F61A"
      >
        <Input
          field="tokenList.0"
          Suffix={
            <ToggleButton defaultValue={false} name="balanced" onClick={noop} />
          }
          shortView
          readonly
          onlyField
        />
        <Hr border="1px solid #F3F4F61A" />
        <Input
          field="tokenList.1"
          shortView
          readonly
          Suffix={
            <ToggleButton defaultValue={false} name="balanced" onClick={noop} />
          }
          onlyField
        />
      </Div>
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

export default PoolFormWithdraw;
