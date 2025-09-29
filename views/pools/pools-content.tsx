import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import Table from '@/components/table';
import { useTabState } from '@/hooks/use-tab-manager';

import PoolsTabs from './components/pools-tabs';
import {
  FEATURES_POOLS_DATA,
  FEATURES_POOLS_HEADER_DATA,
  VERIFIED_POOLS_HEADER_DATA,
} from './pools.data';
import PoolsHeader from './pools-header';

const PoolsContent: FC = () => {
  const { tab } = useTabState();

  return (
    <Div
      mb="4rem"
      gap="1rem"
      display="flex"
      flexDirection="column"
      mt={['1rem', '1rem', '1rem', '2.5rem']}
    >
      <PoolsHeader />
      <PoolsTabs />
      {
        [
          <Table
            key={v4()}
            rows={[]}
            title={VERIFIED_POOLS_HEADER_DATA}
            gridTemplateColumns="4fr repeat(5, 1fr)"
          />,
          <Table
            key={v4()}
            rows={FEATURES_POOLS_DATA}
            title={FEATURES_POOLS_HEADER_DATA}
            gridTemplateColumns="repeat(6, 1fr)"
          />,
        ][tab]
      }
    </Div>
  );
};

export default PoolsContent;
