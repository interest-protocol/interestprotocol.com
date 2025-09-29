import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { TableSummaryCustomProps } from '../table-summary.types';
import TableSummaryTitle from '../table-summary-title';

const TableSummaryTitleCustom: FC<TableSummaryCustomProps> = ({
  title,
  total,
  Filter,
}) => (
  <Div
    gap="1rem"
    mb="1.875rem"
    display="flex"
    justifyContent="space-between"
    flexDirection={['column', 'column', 'row']}
  >
    <TableSummaryTitle title={title} total={total} />
    <Div display="flex" gap="1rem">
      {Filter}
    </Div>
  </Div>
);

export default TableSummaryTitleCustom;
