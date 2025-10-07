import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';

import { Button } from '@/components/button';
import PoolName from '@/components/pool-name';
import { ProgressIndicator } from '@/components/progress-indicator';
import Table from '@/components/table';
import { Routes, RoutesEnum } from '@/constants';
import { POOLS } from '@/constants/pools';
import { useModal } from '@/hooks';
import { formatDollars } from '@/utils';

import OverviewModal from './components/overview-modal';
import { OverviewModalProps } from './components/overview-modal/overview-modal.types';
import OverviewTooltip from './components/overview-tooltip';
import { VERIFIED_POOLS_HEADER_DATA } from './pools.data';
import usePoolsMetrics, { PoolMetrics } from './pools.hooks/use-pools-metrics';
import PoolsTableMobile from './pools-table-mobile';

const PoolsTableCurve: FC = () => {
  const { setContent } = useModal();
  const { data: metricsData, isLoading } = usePoolsMetrics();

  const search = useWatch({ name: 'search' }) as string;

  const poolsMetricsMap = metricsData?.data.reduce(
    (acc, pool) => {
      acc[pool.poolId] = pool;
      return acc;
    },
    {} as Record<string, PoolMetrics>
  );

  const filteredPools = POOLS.filter(({ poolAddress }) => {
    const pool = poolsMetricsMap?.[poolAddress];
    if (!pool || !search) return true;
    return pool.symbols.some((symbol) =>
      symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  const rows = filteredPools.map(({ poolAddress, tokensAddresses }) => {
    const pool = poolsMetricsMap?.[poolAddress];
    const isLoading = !pool;

    const PoolOverview = (overviewModalProps: OverviewModalProps) =>
      setContent(<OverviewModal {...overviewModalProps} />, {
        title: 'Overview',
        titleAlign: 'center',
        modalWidth: '32rem',
        showTitleOnMobile: true,
      });

    return {
      link: `${Routes[RoutesEnum.PoolDetails]}?address=${poolAddress}`,
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
          Title: isLoading ? (
            <Skeleton width={80} />
          ) : (
            formatDollars(Number(Number(pool.metrics.tvl).toFixed(2)))
          ),
          position: 'right' as const,
        },
        {
          Title: isLoading ? (
            <Skeleton width={80} />
          ) : (
            formatDollars(Number(Number(pool.metrics.volume).toFixed(2)))
          ),
          position: 'right' as const,
        },
        {
          Title: pool ? (
            <OverviewTooltip
              title={
                pool
                  ? `${+(Number(pool.metrics.apr) + Number(pool.metrics.farmApr)).toFixed(2)}%`
                  : 'Loading...'
              }
              feesApr={pool ? Number(pool.metrics.apr) : 0}
              rewardsApr={pool ? Number(pool.metrics.farmApr) : 0}
              apr={
                pool
                  ? Number(pool.metrics.apr) + Number(pool.metrics.farmApr)
                  : 0
              }
            />
          ) : (
            'Loading'
          ),
          position: 'right' as const,
        },
        {
          Content: (
            <Div display="flex" justifyContent="flex-end" width="100%">
              <Button
                p="unset"
                gap="0.2rem"
                border="none"
                variant="text"
                fontWeight="400"
                color="#B4C5FF"
                fontSize="0.875rem"
                lineHeight="1.12rem"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  PoolOverview({
                    apr: pool
                      ? `${(Number(pool.metrics.apr) + Number(pool.metrics.farmApr)).toFixed(2)}%`
                      : '0',
                    address: poolAddress,
                    symbols: pool?.symbols,
                    tokensAddresses: pool?.coins ?? tokensAddresses,
                  });
                }}
                nHover={{ color: '#b4c6ffc1' }}
              >
                Overview{' '}
                {!pool && <ProgressIndicator size={12} variant="loading" />}
              </Button>
            </Div>
          ),
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
    <>
      <Div display={['none', 'none', 'none', 'flex']}>
        <Table
          rows={rows}
          isLoading={isLoading}
          title={VERIFIED_POOLS_HEADER_DATA}
          gridTemplateColumns="3fr repeat(5, 1fr)"
        />
      </Div>
      <PoolsTableMobile />
    </>
  );
};

export default PoolsTableCurve;
