import { FC } from 'react';

import PoolName from '@/components/pool-name';
import Table from '@/components/table';
import { formatDollars } from '@/utils';
import usePoolsMetrics from '@/views/pools/pools.hooks/use-pools-metrics';

import { POOLS_STATS_HEADER_DATA } from '../stats.data';

const StatsPoolsTable: FC = () => {
  const { data: metricsData } = usePoolsMetrics();

  return (
    <Table
      title={POOLS_STATS_HEADER_DATA}
      gridTemplateColumns="4rem repeat(6, 1fr)"
      rows={
        metricsData?.data.map((pool, index) => ({
          cells: [
            {
              color: '#FFFFFF80',
              Title: index + 1,
            },
            {
              Content: (
                <PoolName
                  address={pool.poolId}
                  symbols={pool.symbols}
                  tokensAddresses={pool.coins}
                />
              ),
            },
            {
              Title: formatDollars(Number(pool.metrics.tvl), 6, 'start'),
            },
            {
              Title: formatDollars(Number(pool.metrics.volume1D), 6, 'start'),
            },
            {
              Title: formatDollars(Number(pool.metrics.volume), 6, 'start'),
            },
            {
              Title: formatDollars(Number(pool.metrics.fees1D), 6, 'start'),
            },
            {
              Title: formatDollars(Number(pool.metrics.fees), 6, 'start'),
            },
          ],
        })) ?? []
      }
    />
  );
};

export default StatsPoolsTable;
