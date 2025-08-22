import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { TokenProps } from '../tokens.types';
import TableRowDesktop from './components/table-row-desktop';
import TableRowMobile from './components/table-row-mobile';

const TableRow: FC<TokenProps> = (props) => (
  <Div
    width="100%"
    bg="#030712"
    borderBottom="1px solid #1F2937"
    cursor="pointer"
    nHover={{
      bg: '#1F2937',
    }}
    nLastChild={{
      borderBottomLeftRadius: '0.75rem',
      borderBottomRightRadius: '0.75rem',
      borderBottom: 0,
    }}
  >
    <Div display={['block', 'block', 'none','none']}>
      <TableRowMobile {...props} />
    </Div>
    <Div display={['none', 'none', 'block','block']}>
      <TableRowDesktop {...props} />
    </Div>
  </Div>
);

export default TableRow;
