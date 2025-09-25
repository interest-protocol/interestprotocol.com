import { Button, Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { formatDollars } from '@/utils/string';

import TokenPair from './components/token-pair';
import { RewardsProps } from './rewards.types';

const Rewards: FC<RewardsProps> = ({ claimingFee, pairToken }) => (
  <Div display="flex" flexDirection="column" gap="0.75rem" my="2rem">
    <P
      color="#FFFFFF"
      fontWeight="400"
      fontSize="1.5rem"
      fontFamily="Inter"
      lineHeight="2.25rem"
    >
      Rewards
    </P>
    <Div
      p="1rem"
      gap="1rem"
      display="flex"
      bg="#9CA3AF1A"
      borderRadius="0.75rem"
      flexDirection="column"
    >
      <Div display="flex" flexDirection="column" gap="0.5rem">
        <P
          fontSize="1rem"
          fontWeight="500"
          color="#9CA3AF"
          fontFamily="Inter"
          lineHeight="1.5rem"
        >
          Pending Yield
        </P>

        <Span
          fontWeight="500"
          color="#FFFFFF"
          fontFamily="Inter"
          lineHeight="2.25rem"
          fontSize={['1.25rem', '1.5rem']}
        >
          {formatDollars(0.0, 6, 'start')}
        </Span>
      </Div>
      <Div display="flex" flexDirection="column" gap="0.5rem">
        <P
          fontSize="1rem"
          fontWeight="500"
          color="#9CA3AF"
          fontFamily="Inter"
          lineHeight="1.5rem"
        >
          Rewards per asset
        </P>

        <TokenPair left={pairToken[0]} right={pairToken[1]} />
      </Div>
    </Div>

    <Div display="flex" justifyContent="space-between">
      <P
        color="#949E9E"
        fontWeight="500"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.1375rem"
      >
        Claiming Fee:
      </P>
      <P
        color="#FFFFFF"
        fontWeight="500"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.1375rem"
      >
        {claimingFee}
      </P>
    </Div>
    <Button
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
      Claim
    </Button>
  </Div>
);

export default Rewards;
