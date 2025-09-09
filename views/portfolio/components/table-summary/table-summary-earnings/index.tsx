import { Button, Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import ArrowRight from '@/components/svg/arrow-right';

import { TotalEarningProps } from '../table-summary.types';

const TableSummaryEarnings: FC<TotalEarningProps> = ({ gain, onClaim }) => (
  <Div
    gap="0.5rem"
    display="flex"
    bg="#9CA3AF1A"
    p="0.75rem 1rem"
    alignItems="center"
    borderRadius="0.75rem"
    border="1px solid #9CA3AF1A"
    fontSize="1rem"
    fontWeight="500"
    fontFamily="Inter"
    lineHeight="1.5rem"
  >
    <Span color="#9CA3AF">Total Earnings:</Span>
    <Span color="#FFFFFF">{gain}</Span>
    <Button
      all="unset"
      ml="0.5rem"
      gap="0.2rem"
      border="none"
      display="flex"
      color="#B4C5FF"
      fontWeight="500"
      cursor="pointer"
      fontFamily="1rem"
      onClick={onClaim}
      alignItems="center"
    >
      Claim
      <ArrowRight
        width="100%"
        color="#B4C5FF"
        maxWidth="0.75rem"
        maxHeight="0.75rem"
      />
    </Button>
  </Div>
);

export default TableSummaryEarnings;
