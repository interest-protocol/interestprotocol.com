import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import Table from '@/components/table';
import NotFound from '@/views/components/select-token-modal/not-found';

import { data } from '../curve-pools/curve-pools.data';
import Earnings from '../earnings';
import Position from '../position';
import TableRow from '../table-row-pool';
import Title from '../title';

const V3: FC = () => (
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
      gridTemplateColumns={['1fr', '2.5fr 1fr 1fr 1fr 1fr 1fr']}
    >
      {data.length > 0 ? (
        data.map((pool) => <TableRow key={unikey()} {...pool} />)
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

export default V3;
