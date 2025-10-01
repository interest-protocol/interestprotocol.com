import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';

import { PlusSVG } from '@/components/svg';

import Rewards from '../rewards';
import AdditionalInfo from './components/additional-info';
import Input from './components/input';

const Deposit: FC = () => (
  <Div display="flex" flexDirection="column" gap="0.75rem">
    <Div display="flex" flexDirection="column" gap="0.35rem">
      <Input index={0} />
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
      <Input index={1} />
    </Div>
    <AdditionalInfo
      depositRatio="53.73% USDT / 46.27% USDC"
      estimatedApr="68.18%"
    />
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

    <Div display={['none', 'flex']} flexDirection="column">
      <Rewards
        claimingFee="18%"
        pairToken={[
          { value: 0.0, symbol: 'MOVE', iconUrl: '/eth.png' },
          { value: 0.0, symbol: 'MOVE', iconUrl: '/usdt.png' },
        ]}
      />
    </Div>
  </Div>
);

export default Deposit;
