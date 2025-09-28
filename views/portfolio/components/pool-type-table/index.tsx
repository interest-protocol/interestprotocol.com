import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import Table from '@/components/table';

import TableSummary from '../table-summary';
import {
  TableSummaryCustomProps,
  TableSummaryProps,
} from '../table-summary/table-summary.types';
import TableSummaryTitleCustom from '../table-summary/table-summary-title-custom';
import { PoolTypeTableProps } from './pool-type-table.types';
import { isTableSummaryCustom } from './pool-type-table.utils';

const PoolTypeTable: FC<PoolTypeTableProps> = ({
  rows,
  tableHeader,
  headerSummary,
  gridTemplateColumns,
}) => (
  <Div width="100%" display="flex" flexDirection="column" mb="1rem">
    {isTableSummaryCustom(headerSummary) ? (
      <TableSummaryTitleCustom
        {...(headerSummary as unknown as TableSummaryCustomProps)}
      />
    ) : (
      <TableSummary {...(headerSummary as unknown as TableSummaryProps)} />
    )}
    <Table
      key={v4()}
      rows={rows}
      title={tableHeader}
      gridTemplateColumns={gridTemplateColumns || '15rem 2fr repeat(4, 1fr)'}
    />
  </Div>
);

export default PoolTypeTable;
