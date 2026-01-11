import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import PoolName from '@/components/pool-name';
import Table from '@/components/table';
import { formatDollars } from '@/utils';
import usePoolsMetrics from '@/views/pools/pools.hooks/use-pools-metrics';

import { POOLS_STATS_HEADER_DATA } from '../stats.data';
import StatsPoolsTableMobile from './stats-pools-table-mobile';

const StatsPoolsTable: FC = () => {
  const { data: metricsData, isLoading } = usePoolsMetrics();

  const skeletonRows = [...Array(6)].map(() => ({
    cells: [
      { Title: <Skeleton width={20} height={15} /> },
      { Title: <Skeleton width={100} height={15} /> },
      { Title: <Skeleton width={80} height={15} /> },
      { Title: <Skeleton width={80} height={15} /> },
      { Title: <Skeleton width={80} height={15} /> },
      { Title: <Skeleton width={80} height={15} /> },
      { Title: <Skeleton width={80} height={15} /> },
    ],
  }));

  const rows =
    metricsData?.data?.map((pool, index) => ({
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
    })) ?? [];

  return (
    <>
      <Div display={['none', 'none', 'none', 'flex']}>
        <Table
          title={POOLS_STATS_HEADER_DATA}
          gridTemplateColumns="4rem 2fr repeat(5, 1fr)"
          rows={isLoading ? skeletonRows : rows}
        />
      </Div>
      <StatsPoolsTableMobile />
    </>
  );
};

export default StatsPoolsTable;
