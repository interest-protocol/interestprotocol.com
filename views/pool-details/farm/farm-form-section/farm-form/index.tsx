import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';

import AdditionalInfo from './components/additional-info';
import Input from './components/input';

const FarmForm: FC = () => (
  <Div display="flex" flexDirection="column" gap="0.75rem">
    <Div display="flex" flexDirection="column" gap="0.35rem">
      <Input field="lpCoin" />
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
    <AdditionalInfo
      field="lpCoin"
      data={[
        {
          label: 'Network fee',
          amount: '0,96$',
        },
        {
          label: 'Staking fee',
          amount: '0,96$',
        },
      ]}
    />
  </Div>
);

export default FarmForm;
