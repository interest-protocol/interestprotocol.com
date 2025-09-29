import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/button';
import ArrowRight from '@/components/svg/arrow-right';

import { TotalEarningProps } from '../table-summary.types';

const TableSummaryEarnings: FC<TotalEarningProps> = ({ gain, onClaim }) => (
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
    width={['100%', 'fit-content']}
    justifyContent="space-between"
  >
    <Div display="flex" gap="0.5rem">
      <Span color="#9CA3AF">Total Earnings:</Span>
      <Span color="#FFFFFF">{gain}</Span>
    </Div>
    <Button
      p="unset"
      ml="0.5rem"
      gap="0.2rem"
      border="none"
      variant="text"
      color="#B4C5FF"
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

export default TableSummaryEarnings;
