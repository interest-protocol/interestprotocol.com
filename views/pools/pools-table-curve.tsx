import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';

import { Button } from '@/components/button';
import PoolName from '@/components/pool-name';
import Table from '@/components/table';
import { Routes, RoutesEnum } from '@/constants';
import { POOLS } from '@/constants/pools';
import { useModal } from '@/hooks';
import { formatDollars } from '@/utils';

import PoolNameSkeleton from '../components/pool-name-skeleton';
import OverviewModal from './components/overview-modal';
import { OverviewModalProps } from './components/overview-modal/overview-modal.types';
import OverviewTooltip from './components/overview-tooltip';
import { VERIFIED_POOLS_HEADER_DATA } from './pools.data';
import usePoolsMetrics, {
  PoolMetrics,
  ZERO_METRICS,
} from './pools.hooks/use-pools-metrics';
import PoolsTableMobile from './pools-table-mobile';

const PoolsTableCurve: FC = () => {
  const { setContent } = useModal();
  const { data: metricsData, isLoading: isLoadingMetrics } = usePoolsMetrics();
  const search = useWatch({ name: 'search' }) as string;

  const poolsMetricsMap = useMemo(() => {
    return (
      metricsData?.data?.reduce(
        (acc, pool) => {
          acc[pool.poolId] = pool;
          return acc;
        },
        {} as Record<string, PoolMetrics>
      ) ?? {}
    );
  }, [metricsData]);

  const filteredPools = useMemo(() => {
    if (!search) return POOLS;

    const normalizedSearch = search.trim().toLowerCase();

    return POOLS.filter(({ poolAddress, tokensAddresses }) => {
      const pool = poolsMetricsMap[poolAddress];

      const matchesSymbol = pool?.symbols?.some((symbol) =>
        symbol.toLowerCase().includes(normalizedSearch)
      );

      const matchesPoolAddress = poolAddress.toLowerCase() === normalizedSearch;

      const matchesTokenAddress = tokensAddresses?.some(
        (address) => address.toLowerCase() === normalizedSearch
      );

      return matchesSymbol || matchesPoolAddress || matchesTokenAddress;
    });
  }, [search, poolsMetricsMap]);

  const rows = filteredPools.map(({ poolAddress, tokensAddresses }) => {
    const pool = poolsMetricsMap[poolAddress];
    const metrics = pool?.metrics ?? ZERO_METRICS;

    const isLoading = isLoadingMetrics;

    const openOverview = (props: OverviewModalProps) =>
      setContent(<OverviewModal {...props} />, {
        title: 'Overview',
        titleAlign: 'center',
        modalWidth: '32rem',
        showTitleOnMobile: true,
      });

    return {
      link: metricsData?.data?.length
        ? `${Routes[RoutesEnum.PoolDetails]}?address=${poolAddress}`
        : '#',
      cells: [
        {
          Content: isLoading ? (
            <PoolNameSkeleton />
          ) : (
            <PoolName
              address={poolAddress}
              symbols={pool?.symbols}
              tokensAddresses={pool?.coins ?? tokensAddresses}
            />
          ),
        },
        {
          Title: isLoading ? (
            <Skeleton height={15} />
          ) : (
            formatDollars(Number(metrics.tvl))
          ),
          position: 'right' as const,
        },
        {
          Title: isLoading ? (
            <Skeleton height={15} />
          ) : (
            formatDollars(Number(metrics.volume1D))
          ),
          position: 'right' as const,
        },
        {
          Title: isLoading
            ? '0'
            : `${(Number(metrics.apr) + Number(metrics.farmApr)).toFixed(2)}%`,
          Content: isLoading ? (
            <Skeleton height={15} />
          ) : (
            <OverviewTooltip
              title={`${(Number(metrics.apr) + Number(metrics.farmApr)).toFixed(
                2
              )}%`}
              poolAddress={poolAddress}
              feesApr={Number(metrics.apr)}
              rewardsApr={Number(metrics.farmApr)}
              apr={Number(metrics.apr) + Number(metrics.farmApr)}
            />
          ),
          position: 'right' as const,
        },
        {
          Content: isLoading ? (
            <Skeleton height={15} />
          ) : (
            <Div display="flex" justifyContent="flex-end" width="100%">
              <Button
                p="unset"
                border="none"
                variant="text"
                fontWeight="400"
                color="#B4C5FF"
                fontSize="0.875rem"
                lineHeight="1.12rem"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  openOverview({
                    apr: `${(
                      Number(metrics.apr) + Number(metrics.farmApr)
                    ).toFixed(2)}%`,
                    volume: formatDollars(Number(metrics.volume1D)),
                    tvl: formatDollars(Number(metrics.tvl)),
                    fees: formatDollars(Number(metrics.fees1D)),
                    address: poolAddress,
                    symbols: pool?.symbols,
                    tokensAddresses: pool?.coins ?? tokensAddresses,
                  });
                }}
                nHover={{ color: '#b4c6ffc1' }}
              >
                Overview
              </Button>
            </Div>
          ),
        },
        {
          Content: isLoading ? (
            <Skeleton height={15} />
          ) : (
            <Div display="flex" justifyContent="flex-end" width="100%">
              <Link
                href={`${Routes[RoutesEnum.PoolDetails]}?address=${poolAddress}`}
                title="pool name"
              >
                <Button
                  p="unset"
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
      <Div display={['none', 'none', 'none', 'flex']} mb="75vh">
        <Table
          rows={rows}
          title={VERIFIED_POOLS_HEADER_DATA}
          gridTemplateColumns="3fr repeat(5, 1fr)"
        />
      </Div>
      <PoolsTableMobile />
    </>
  );
};

export default PoolsTableCurve;
