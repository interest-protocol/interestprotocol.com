import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import Table from '@/components/table';
import { noop } from '@/utils';
import NotFound from '@/views/components/select-token-modal/not-found';

import TableRow from '../table-row-pool';
import TableSummary from '../table-summary';
import { data } from './curve-pools.data';

const CurvePools: FC = () => {
  return (
    <Div width="100%" display="flex" flexDirection="column">
      <TableSummary
        onClaim={noop}
        totalPosition="0"
        gain="38.88 MOVE"
        title="Curve pools"
        total={`${data.length}`}
      />

      <Table
        columns={['Pool', 'Price Range', 'Liquidity', 'Leverage', 'Earnings']}
        gridTemplateColumns={['1fr', '2.5fr 1fr 1fr 1fr 1fr 1fr']}
      >
        {data.length < 0 ? (
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
};

export default CurvePools;
