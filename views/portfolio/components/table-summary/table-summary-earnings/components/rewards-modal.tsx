import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/Button';
import { formatDollars } from '@/utils/string';

import RewardsModalItem from './rewards-modal-item';

const RewardsModal: FC = () => {
  const claimingFee = 122;

  return (
    <Div display="flex" flexDirection="column" gap="0.5rem" borderRadius="1rem">
      <Div
        p="1rem"
        gap="0.5rem"
        display="flex"
        bg="#9CA3AF1A"
        borderRadius="0.75rem"
        flexDirection="column"
      >
        <P
          color="#949E9E"
          fontSize="0.875rem"
          fontWeight="500"
          fontFamily="Inter"
        >
          Total Earning
        </P>

        <Span
          mb="0.5rem"
          color="#FFFFFF"
          fontWeight="500"
          fontFamily="Inter"
          fontSize="1.25rem"
        >
          {formatDollars(0.0, 6, 'start')}
        </Span>

        <P
          color="#949E9E"
          fontSize="0.875rem"
          fontWeight="500"
          fontFamily="Inter"
        >
          Rewards per asset
        </P>

        <RewardsModalItem symbol="Move" value={12} url="/" />
        <RewardsModalItem symbol="Move" value={12} url="/" />
        <RewardsModalItem symbol="Move" value={12} url="/" />
        <RewardsModalItem symbol="Move" value={12} url="/" />

        <P
          color="#949E9E"
          fontSize="0.875rem"
          fontWeight="500"
          fontFamily="Inter"
        >
          Rewarded Fees
        </P>
        <Span
          mb="0.5rem"
          color="#FFFFFF"
          fontWeight="500"
          fontFamily="Inter"
          fontSize="1.25rem"
        >
          {formatDollars(0.0, 6, 'start')}
        </Span>
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
          {claimingFee} %
        </P>
      </Div>
      <Button
        variant="filled"
        p="0.5rem 1rem"
        height="2.5rem"
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
};

export default RewardsModal;
