import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { TableSummaryProps } from './table-summary.types';
import TableSummaryEarnings from './table-summary-earnings';
import TableSummaryPosition from './table-summary-position';
import TableSummaryTitle from './table-summary-title';

const TableSummary: FC<TableSummaryProps> = ({
  gain,
  title,
  total,
  onClaim,
  totalPosition,
}) => {
  return (
    <Div
      gap="1rem"
      mb="1.875rem"
      display="flex"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <TableSummaryTitle title={title} total={total} />
      <Div
        display="flex"
        flexWrap="wrap"
        gap={['0.5rem', '1rem']}
        justifyContent="space-between"
      >
        {totalPosition && (
          <TableSummaryPosition totalPosition={totalPosition} />
        )}
        <TableSummaryEarnings gain={gain} onClaim={onClaim} />
      </Div>
    </Div>
  );
};

export default TableSummary;
