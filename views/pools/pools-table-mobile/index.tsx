import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { Button } from '@/components/button';
import NoCoin from '@/components/layout/header/wallet/profile/menu-profile/tabs/no-coin';
import PoolName from '@/components/pool-name';
import SquarePlus from '@/components/svg/square-plus';
import { Routes, RoutesEnum } from '@/constants';
import { POOLS } from '@/constants/pools';
import { useModal } from '@/hooks';
import { formatDollars } from '@/utils';
import TableMobileLine from '@/views/components/table-mobile-line';
import TableMobileSkeleton from '@/views/components/table-mobile-skeleton';
import usePoolsMetrics, {
  PoolMetrics,
} from '@/views/pools/pools.hooks/use-pools-metrics';

import OverviewModal from '../components/overview-modal';
import { OverviewModalProps } from '../components/overview-modal/overview-modal.types';
import OverviewTooltip from '../components/overview-tooltip';

const PoolsTableMobile: FC = () => {
  const { setContent } = useModal();
  const { data: metricsData, isLoading } = usePoolsMetrics();
  const search = useWatch({ name: 'search' }) as string;

  const PoolOverview = (overviewModalProps: OverviewModalProps) =>
    setContent(<OverviewModal {...overviewModalProps} />, {
      title: 'Overview',
      titleAlign: 'center',
      modalWidth: '32rem',
      showTitleOnMobile: true,
    });

  const poolsMetricsMap = metricsData?.data.reduce(
    (acc, pool) => {
      acc[pool.poolId] = pool;
      return acc;
    },
    {} as Record<string, PoolMetrics>
  );

  const filteredPools = useMemo(() => {
    if (!search) return POOLS;
    return POOLS.filter(({ poolAddress }) => {
      const pool = poolsMetricsMap?.[poolAddress];
      const symbols = pool?.symbols?.join(' ') ?? '';
      return symbols.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, poolsMetricsMap]);

  const noPools = !POOLS.length;

  return (
    <Div
      width="100%"
      bg="#030712"
      borderStyle="solid"
      flexDirection="column"
      borderRadius="0.5rem"
      borderColor="#1F2937"
      display={['flex', 'flex', 'flex', 'none']}
      borderWidth={noPools ? '1px 1px 1px 1px' : '1px 1px 0px 1px'}
      py={noPools ? ['1.5rem', '1.5rem', '1.5rem', 0] : undefined}
      height={noPools ? ['11.75rem', '11.75rem', '11.75rem', 0] : undefined}
    >
      {noPools ? (
        <NoCoin />
      ) : isLoading ? (
        filteredPools.map(() => <TableMobileSkeleton key={v4()} />)
      ) : (
        filteredPools.map(({ poolAddress, tokensAddresses }) => {
          const pool = poolsMetricsMap?.[poolAddress];

          return (
            <Div
              key={v4()}
              p="1rem"
              display="flex"
              flexDirection="column"
              gap="0.5rem"
              borderStyle="solid"
              borderColor="#1F2937"
              borderWidth="0px 0px 1px 0px"
            >
              <Div display="flex" alignItems="center" gap="0.5rem">
                <PoolName
                  address={poolAddress}
                  symbols={pool?.symbols}
                  tokensAddresses={pool?.coins ?? tokensAddresses}
                />
              </Div>

              <TableMobileLine
                label="TVL"
                value={formatDollars(Number(pool?.metrics.tvl))}
              />
              <TableMobileLine
                label="Volume"
                value={formatDollars(Number(pool?.metrics.volume1D))}
              />
              <TableMobileLine
                label="APR"
                value={
                  <OverviewTooltip
                    title={`${(
                      Number(pool?.metrics.apr) + Number(pool?.metrics.farmApr)
                    ).toFixed(2)}%`}
                    poolAddress={poolAddress}
                    feesApr={Number(pool?.metrics.apr)}
                    rewardsApr={Number(pool?.metrics.farmApr)}
                    apr={
                      Number(pool?.metrics.apr) + Number(pool?.metrics.farmApr)
                    }
                  />
                }
              />

              <Div
                mt="0.5rem"
                gap="0.5rem"
                display="grid"
                gridTemplateColumns="1fr 1fr"
              >
                <Button
                  px="1rem"
                  display="flex"
                  variant="tonal"
                  color="#B4C5FF"
                  fontSize="0.875rem"
                  lineHeight="1.25rem"
                  borderRadius="0.65rem"
                  borderColor="#B4C5FF"
                  justifyContent="center"
                  onClick={() =>
                    PoolOverview({
                      apr: `${(
                        Number(pool?.metrics.apr) +
                        Number(pool?.metrics.farmApr)
                      ).toFixed(2)}%`,
                      volume: formatDollars(Number(pool?.metrics.volume)),
                      tvl: formatDollars(Number(pool?.metrics.tvl)),
                      fees: formatDollars(Number(pool?.metrics.fees1D)),
                      address: poolAddress,
                      symbols: pool?.symbols,
                      tokensAddresses: pool?.coins ?? tokensAddresses,
                    })
                  }
                >
                  Overview
                </Button>
                <Link
                  href={`${Routes[RoutesEnum.PoolDetails]}?address=${poolAddress}`}
                  title="pool name"
                >
                  <Button
                    px="1rem"
                    width="fill-available"
                    variant="filled"
                    fontSize="0.875rem"
                    lineHeight="1.25rem"
                    borderRadius="0.65rem"
                    border="1px solid"
                    borderColor="#B4C5FF"
                  >
                    Add Liquidity
                    <SquarePlus maxWidth="1rem" maxHeight="1rem" width="100%" />
                  </Button>
                </Link>
              </Div>
            </Div>
          );
        })
      )}
    </Div>
  );
};

export default PoolsTableMobile;
