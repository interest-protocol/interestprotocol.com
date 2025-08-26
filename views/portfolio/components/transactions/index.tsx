import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import Table from '@/components/table';

import Title from '../title';
import TableRow from './table-row';
import { transactions } from './transactions.data';

const Transactions: FC = () => {
  return (
    <Div width="100%" display="flex" flexDirection="column">
      <Div
        gap="1rem"
        mb="1.875rem"
        display="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row']}
      >
        <Title title="Transactions" count={0} />
      </Div>

      <Table
        columns={['Time', 'Action', 'Pool', 'Details']}
        gridTemplateColumns={['1fr', 'repeat(4,1fr)']}
      >
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TableRow key={unikey()} {...transaction} />
          ))
        ) : (
          <></>
        )}
      </Table>
    </Div>
  );
};

export default Transactions;
