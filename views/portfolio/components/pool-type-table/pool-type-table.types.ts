import { DivProps } from '@stylin.js/elements';

import {
  TableHeaderTitleProps,
  TableRowProps,
} from '@/components/table/table.types';

import {
  TableSummaryCustomProps,
  TableSummaryProps,
} from '../table-summary/table-summary.types';

export interface PoolTypeTableProps
  extends Pick<DivProps, 'gridTemplateColumns'> {
  rows: ReadonlyArray<TableRowProps>;
  tableHeader: ReadonlyArray<TableHeaderTitleProps>;
  headerSummary: TableSummaryProps | TableSummaryCustomProps;
}
