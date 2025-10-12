import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import Table from '@/components/table';

import PortfolioTableMobile from '../portfolio-table-mobile';
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
  isLoading,
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
    <Div display={['none', 'none', 'none', 'flex']}>
      <Table
        key={v4()}
        rows={rows}
        title={tableHeader}
        isLoading={isLoading}
        gridTemplateColumns={gridTemplateColumns || '20rem repeat(5, 1fr)'}
      />
    </Div>
    <PortfolioTableMobile />
  </Div>
);

export default PoolTypeTable;
