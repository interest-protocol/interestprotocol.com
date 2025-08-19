import { FC } from 'react';
import unikey from 'unikey';

import Table from '@/components/table';

import { data } from './pools.data';
import TableRow from './table-row';

const Pools: FC = () => (
  <Table
    gridTemplateColumns={['1fr', '1fr 2fr 1fr 1fr 1fr 1fr 1fr']}
    columns={[
      '#',
      'Token Name',
      'Transactions',
      'TVL',
      '24h Volume',
      '7D Volume',
      '1D APR',
    ]}
  >
    {data.map((pool) => (
      <TableRow key={unikey()} {...pool} />
    ))}
  </Table>
);

export default Pools;
