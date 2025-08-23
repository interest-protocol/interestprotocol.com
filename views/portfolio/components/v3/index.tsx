import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Table from '@/components/table';

import Earnings from '../earnings';
import Position from '../position';
import Title from '../title';

const V3: FC = () => {
  return (
    <Div width="100%" display="flex" flexDirection="column">
      <Div
        gap="1rem"
        mb="1.875rem"
        display="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row']}
      >
        <Title title="v3" count={0} />
        <Div display="flex" gap="1rem">
          <Position value={0} />
          <Earnings value={98} />
        </Div>
      </Div>

      <Table
        columns={['Pool', 'Price Range', 'Liquidity', 'Leverage', 'Earnings']}
        gridTemplateColumns={['1fr', 'repeat(5,1fr)']}
      >
        nada a comentar
      </Table>
    </Div>
  );
};

export default V3;
