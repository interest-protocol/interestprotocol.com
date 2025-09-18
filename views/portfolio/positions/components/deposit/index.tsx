import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';

import { PlusSVG } from '@/components/svg';

import Rewards from '../rewards';
import AdditionalInfo from './components/additional-info';
import Input from './components/input';

const Deposit: FC = () => (
  <Div display="flex" flexDirection="column" gap="0.5rem">
    <Input index={0} />

    <Div
      my="-1.55rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="100"
    >
      <Button
        p="0.5rem"
        bg="#030712"
        border="none"
        width="2.25rem"
        height="2.25rem"
        cursor="pointer"
        borderRadius="0.75rem"
      >
        <PlusSVG
          maxWidth="1rem"
          maxHeight="1rem"
          width="100%"
          color="#9CA3AF"
        />
      </Button>
    </Div>

    <Input index={1} />
    <AdditionalInfo
      depositRatio="53.73% USDT / 46.27% USDC"
      estimatedApr="68.18%"
    />
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
      Connect Wallet
    </Button>

    <Rewards
      claimingFee="18%"
      pairToken={[
        { value: 0.0, symbol: 'MOVE', iconUrl: '/eth.png' },
        { value: 0.0, symbol: 'MOVE', iconUrl: '/usdt.png' },
      ]}
    />
  </Div>
);

export default Deposit;
