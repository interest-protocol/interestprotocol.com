import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/button';
import PoolName from '@/components/pool-name';
import Table from '@/components/table';
import { Routes, RoutesEnum } from '@/constants';
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
        {
          Content: (
            <Div display="flex" justifyContent="flex-end" width="100%">
              <Link
                href={`${Routes[RoutesEnum.PoolDetails]}?address=${poolAddress}`}
                title="pool name"
              >
                <Button
                  p="unset"
                  gap="0.2rem"
                  border="none"
                  variant="text"
                  fontWeight="400"
                  color="#B4C5FF"
                  fontSize="0.875rem"
                  lineHeight="1.12rem"
                  nHover={{ color: '#b4c6ffc1' }}
                >
                  Add Liquidity
                </Button>
              </Link>
            </Div>
          ),
        },
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
