import { FC } from 'react';
import { v4 } from 'uuid';

import { useTabState } from '@/hooks/use-tab-manager';

import Table from '../../components/table';
import StatsTabs from './components/stats-tabs';
import {
  POOL_STATS_DATA,
  POOLS_STATS_HEADER_DATA,
  TOKEN_STATS_DATA,
  TOKENS_STATS_HEADER_DATA,
  TRANSACTION_STATS_DATA,
  TRANSACTION_STATS_HEADER_DATA,
} from './stats.data';

const StatsTableReports: FC = () => {
  const { tab } = useTabState();

  return (
    <>
      <StatsTabs />
      {
        [
          <Table
            key={v4()}
            rows={TOKEN_STATS_DATA}
            title={TOKENS_STATS_HEADER_DATA}
            gridTemplateColumns="4rem repeat(6, 1fr)"
          />,
          <Table
            key={v4()}
            rows={POOL_STATS_DATA}
            title={POOLS_STATS_HEADER_DATA}
            gridTemplateColumns="4rem repeat(6, 1fr)"
          />,
          <Table
            key={v4()}
            rows={TRANSACTION_STATS_DATA}
            title={TRANSACTION_STATS_HEADER_DATA}
            gridTemplateColumns="1fr 3fr repeat(4, 2fr)"
          />,
        ][tab]
      }
    </>
  );
};

export default StatsTableReports;
