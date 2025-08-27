import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';

import Rewards from '../rewards';
import Input from './components/input';
import Slider from './components/slider';

const Withdraw: FC = () => (
  <Div display="flex" flexDirection="column" gap="0.5rem">
    <Input />
    <Slider />
    <Button
      mb="1.5rem"
      border="none"
      p="0.5rem 1rem"
      height="3.5rem"
      display="flex"
      color="#002A78"
      fontWeight="500"
      fontSize="1rem"
      background="#B4C5FF"
      alignItems="center"
      fontFamily="Inter"
      cursor="pointer"
      borderRadius="0.75rem"
      justifyContent="center"
    >
      Withdreaw
    </Button>

    <Rewards
      claimingFee="18%"
      pairToken={[
        { value: '0.00', symbol: 'ETH', iconUrl: '/eth.png' },
        { value: '0.00', symbol: 'USDT', iconUrl: '/usdt.png' },
      ]}
    />
  </Div>
);

export default Withdraw;
