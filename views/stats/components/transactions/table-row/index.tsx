import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { TransactionProps } from '../transactions.types';
import TableRowDesktop from './components/table-row-desktop';
import TableRowMobile from './components/table-row-mobile';

const TableRow: FC<TransactionProps> = (props) => (
  <Div
    width="100%"
    bg="#030712"
    borderBottom="1px solid #1F2937"
    cursor="pointer"
    nHover={{
      bg: '#1F2937',
    }}
  >
    <Div display={['block', 'none']}>
      <TableRowMobile {...props} />
    </Div>
    <Div display={['none', 'block']}>
      <TableRowDesktop {...props} />
    </Div>
  </Div>
);

export default TableRow;
