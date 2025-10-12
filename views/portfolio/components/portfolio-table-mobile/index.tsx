import { Div } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import Link from 'next/link';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Button } from '@/components/button';
import NoCoin from '@/components/layout/header/wallet/profile/menu-profile/tabs/no-coin';
import PoolName from '@/components/pool-name';
import { Routes, RoutesEnum } from '@/constants';
import { FARMS_BY_LP } from '@/constants/farms';
import { POOLS } from '@/constants/pools';
import { useGetAccountFarmsData } from '@/hooks/use-get-farm-account-data';
import { useMetrics } from '@/hooks/use-metrics';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { formatDollars, formatMoney } from '@/utils';
import PriceRange from '@/views/components/price-range';
import TableMobileLine from '@/views/components/table-mobile-line';
import TableMobileSkeleton from '@/views/components/table-mobile-skeleton';

const PortfolioTableMobile: FC = () => {
  const { coinsMap, loading: isCoinsMapLoading } = useCoins();
  const { data: metricsData, isLoading: isMetricsLoading } = useMetrics();
  const { data: accountFarmsData, isLoading: isAccountFarmsLoading } =
    useGetAccountFarmsData();

  const poolsPosition = POOLS.filter(
    (pool) => coinsMap[pool.tokensAddresses[0]]?.balance
  );

  const isLoading =
    (isAccountFarmsLoading && !accountFarmsData) ||
    (isCoinsMapLoading && !coinsMap) ||
    (isMetricsLoading && !metricsData);

  if (isLoading) {
    return (
      <>
        {poolsPosition.length > 0 &&
          poolsPosition.map(() => (
            <TableMobileSkeleton key={v4()} buttons={1} />
          ))}
      </>
    );
  }

  const noPools = !poolsPosition.length;
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
      ) : (
        poolsPosition.map(({ poolAddress, tokensAddresses }) => (
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
                tokensAddresses={tokensAddresses}
              />
            </Div>
            <TableMobileLine
              label="Price"
              value={<PriceRange address={poolAddress} />}
            />
            <TableMobileLine
              label="Liquidity"
              value={formatDollars(
                Number(
                  metricsData?.data.find(({ poolId }) => poolId === poolAddress)
                    ?.metrics.tvl
                )
              )}
            />
            <TableMobileLine
              label="APR"
              color="#34D399"
              value={`${+(Number(metricsData?.data.find(({ poolId }) => poolId === poolAddress)?.metrics.apr) + Number(metricsData?.data.find(({ poolId }) => poolId === poolAddress)?.metrics.farmApr)).toFixed(2)}%`}
            />
            <TableMobileLine
              label="Rewards"
              value={`${formatMoney(
                FixedPointMath.toNumber(
                  BigNumber(
                    String(
                      accountFarmsData?.find(
                        (farm) =>
                          farm.farm ===
                          FARMS_BY_LP[poolAddress]?.address.toString()
                      )?.rewards ?? 0
                    )
                  )
                ),
                4
              )} MOVE`}
            />
            <Div
              mt="0.5rem"
              gap="0.5rem"
              display="grid"
              gridTemplateColumns="1fr"
            >
              <Link
                title="Pool Transaction"
                href={`${Routes[RoutesEnum.PortfolioDetails]}?address=${poolAddress}`}
              >
                <Button
                  px="1rem"
                  display="flex"
                  width="fill-available"
                  variant="tonal"
                  color="#B4C5FF"
                  fontSize="0.875rem"
                  lineHeight="1.25rem"
                  borderRadius="0.65rem"
                  borderColor="#B4C5FF"
                  justifyContent="center"
                >
                  Manage
                </Button>
              </Link>
            </Div>
          </Div>
        ))
      )}
    </Div>
  );
};

export default PortfolioTableMobile;
