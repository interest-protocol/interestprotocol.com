import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Table from '@/components/table';

import Title from '../title';

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
        columns={['Time', 'Action', 'Pool', 'Detail']}
        gridTemplateColumns={['1fr', 'repeat(4,1fr)']}
      >
        nada a comentar
      </Table>
    </Div>
  );
};

export default Transactions;
