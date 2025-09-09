import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import Table from '@/components/table';
import { noop } from '@/utils';
import NotFound from '@/views/components/select-token-modal/not-found';

import TableSummary from '../table-summary';
import Select from './select';
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
        <Select />
      </Div>
      <TableSummary
        onClaim={noop}
        totalPosition="3"
        gain="$33.23"
        title="Transactions"
        total={`${transactions.length}`}
      />

      <Table
        columns={['Time', 'Action', 'Pool', 'Details']}
        gridTemplateColumns={['1fr', 'repeat(4,1fr)']}
      >
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TableRow key={unikey()} {...transaction} />
          ))
        ) : (
          <Div
            py="2rem"
            width="100%"
            border="1px solid #1F2937"
            borderTop="none"
            borderBottomLeftRadius="0.75rem"
            borderBottomRightRadius="0.75rem"
          >
            <NotFound />
          </Div>
        )}
      </Table>
    </Div>
  );
};

export default Transactions;
