import { FC } from 'react';
import unikey from 'unikey';

import Table from '@/components/table';

import TableRow from './table-row';
import { data } from './tokens.data';

const Tokens: FC = () => (
  <Table
    gridTemplateColumns={['1fr', '2fr 2fr 2fr 2fr 2fr 2fr']}
    columns={['#', 'Token Name', 'Price', '1 hour', '1 day', 'FDV', 'Volume']}
  >
    {data.map((token) => (
      <TableRow key={unikey()} {...token} />
    ))}
  </Table>
);

export default Tokens;
