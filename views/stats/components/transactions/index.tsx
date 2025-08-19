import { FC } from 'react';
import unikey from 'unikey';

import Table from '@/components/table';

import TableRow from './table-row';
import { data } from './transactions.data';

const Transactions: FC = () => (
  <Table
    gridTemplateColumns={['1fr', '1fr 3fr 2fr 2fr 2fr 2fr']}
    columns={[
      'Time',
      'Type',
      'USD Amount',
      'Token Amount',
      'Token Amount',
      'Wallet',
    ]}
  >
    {data.map((transaction) => (
      <TableRow key={unikey()} {...transaction} />
    ))}
  </Table>
);

export default Transactions;
