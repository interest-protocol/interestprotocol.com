import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { TableSummaryPositionProps } from '../table-summary.types';

const TableSummaryPosition: FC<TableSummaryPositionProps> = ({
  totalPosition,
}) => (
  <Div
    gap="0.5rem"
    display="flex"
    bg="#121621"
    p="0.75rem 1rem"
    width="fit-content"
    whiteSpace="nowrap"
    alignItems="center"
    borderRadius="0.75rem"
    border="1px solid #20242f"
    fontSize="1rem"
    fontWeight="500"
    fontFamily="Inter"
    lineHeight="1.5rem"
  >
    <Span color="#9CA3AF">Position:</Span>
    <Span color="#34D399">
      {totalPosition}
      <Span display={['none', 'none', 'none', 'inline']}> in Range</Span>
    </Span>
  </Div>
);

export default TableSummaryPosition;
