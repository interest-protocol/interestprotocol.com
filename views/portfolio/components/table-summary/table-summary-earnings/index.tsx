import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/button';
import ArrowRight from '@/components/svg/arrow-right';

import { TotalEarningProps } from '../table-summary.types';

const TableSummaryEarnings: FC<TotalEarningProps> = ({ gain, onClaim }) => {
  const { account } = useAptosWallet();
  return (
    <Div
      gap="0.5rem"
      display="flex"
      fontSize="1rem"
      fontWeight="500"
      bg="#9CA3AF1A"
      p="0.75rem 1rem"
      fontFamily="Inter"
      alignItems="center"
      whiteSpace="nowrap"
      lineHeight="1.5rem"
      borderRadius="0.75rem"
      border="1px solid #9CA3AF1A"
      justifyContent="space-between"
      width={['100%', '100%', '100%', 'fit-content']}
    >
      <Div display="flex" gap="0.5rem">
        <Span color="#9CA3AF">Total Earnings:</Span>
        <Span color="#FFFFFF">{account?.address ? gain : '0.0 MOVE'}</Span>
      </Div>
      <Button
        p="unset"
        ml="0.5rem"
        gap="0.2rem"
        border="none"
        variant="text"
        cursor={account?.address ? 'pointer' : 'not-allowed'}
        color="#B4C5FF"
        disabled={!account?.address}
        onClick={onClaim}
        nHover={{
          color: '#b4c6ffc1',
        }}
      >
        Claim
        <ArrowRight width="100%" maxWidth="0.75rem" maxHeight="0.75rem" />
      </Button>
    </Div>
  );
};

export default TableSummaryEarnings;
