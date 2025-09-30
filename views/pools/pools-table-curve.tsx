import { FC } from 'react';

import PoolName from '@/components/pool-name';
import Table from '@/components/table';
import { POOLS } from '@/constants/pools';
import { formatDollars } from '@/utils';

import OverviewTooltip from './components/overview-tooltip';
import { VERIFIED_POOLS_HEADER_DATA } from './pools.data';
import usePoolsMetrics, { PoolMetrics } from './pools.hooks/use-pools-metrics';

const PoolsTableCurve: FC = () => {
  const { data: metricsData } = usePoolsMetrics();

  const poolsMetricsMap = metricsData?.data.reduce(
    (acc, pool) => {
      acc[pool.poolId] = pool;
      return acc;
    },
    {} as Record<string, PoolMetrics>
  );

  const rows = POOLS.map(({ poolAddress, tokensAddresses }) => {
    const pool = poolsMetricsMap?.[poolAddress];

    return {
      cells: [
        {
          Content: (
            <PoolName
              address={poolAddress}
              symbols={pool?.symbols}
              tokensAddresses={pool?.coins ?? tokensAddresses}
            />
          ),
        },
        {
          Title: pool ? formatDollars(Number(pool.metrics.tvl)) : 'Loading...',
          position: 'right' as const,
        },
        {
          Title: pool
            ? formatDollars(Number(pool.metrics.volume))
            : 'Loading...',
          position: 'right' as const,
        },
        {
          Title: pool
            ? `${+(Number(pool.metrics.apr) + Number(pool.metrics.farmApr)).toFixed(2)}%`
            : 'Loading...',
          position: 'right' as const,
        },
        {
          Content: (
            <OverviewTooltip
              feesApr={pool ? Number(pool.metrics.apr) : 0}
              rewardsApr={pool ? Number(pool.metrics.farmApr) : 0}
              apr={
                pool
                  ? Number(pool.metrics.apr) + Number(pool.metrics.farmApr)
                  : 0
              }
            />
          ),
          position: 'right' as const,
        },
        { Title: 'Add Liquidity', color: '#B4C5FF' },
      ],
    };
  });

  return (
    <Table
      rows={rows}
      title={VERIFIED_POOLS_HEADER_DATA}
      gridTemplateColumns="4fr repeat(5, 1fr)"
    />
  );
};

export default PoolsTableCurve;
