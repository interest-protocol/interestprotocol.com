import BigNumber from 'bignumber.js';
import { FC } from 'react';

import PoolName from '@/components/pool-name';
import { Routes, RoutesEnum } from '@/constants';
import { FARMS_BY_LP } from '@/constants/farms';
import { POOLS } from '@/constants/pools';
import { useGetAccountFarmsData } from '@/hooks/use-get-farm-account-data';
import { useMetrics } from '@/hooks/use-metrics';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { formatDollars, formatMoney, ZERO_BIG_NUMBER } from '@/utils';

import Manage from '../components/manage';
import PriceRange from '../components/price-range';
import PoolTypeTable from './components/pool-type-table';

const PortfolioCurvePools: FC = () => {
  const { coinsMap } = useCoins();
  const { data: metricsData } = useMetrics();
  const { data: accountFarmsData, isLoading: isAccountFarmsLoading } =
    useGetAccountFarmsData();

  const claimableRewards = accountFarmsData?.reduce(
    (acc, farm) => BigNumber(String(acc)).plus(BigNumber(String(farm.rewards))),
    ZERO_BIG_NUMBER
  );

  const poolsPosition = POOLS.filter(
    (pool) => coinsMap[pool.tokensAddresses[0]]?.balance
  );

  return (
    <PoolTypeTable
      headerSummary={{
        title: 'Curve pools',
        total: String(poolsPosition.length),
        gain: `${claimableRewards ? FixedPointMath.toNumber(claimableRewards) : isAccountFarmsLoading ? 'Loading...' : 0} MOVE`,
        onClaim: () => {},
      }}
      tableHeader={[
        { description: 'Pool' },
        { description: 'Price', position: 'right' },
        { description: 'Liquidity', position: 'right' },
        { description: 'APR', position: 'right' },
        { description: 'Rewards', position: 'right' },
      ]}
      rows={poolsPosition.map(({ poolAddress, tokensAddresses }) => ({
        cells: [
          {
            Content: (
              <PoolName
                address={poolAddress}
                tokensAddresses={tokensAddresses}
              />
            ),
          },
          { Content: <PriceRange address={poolAddress} /> },
          {
            Title: formatDollars(
              Number(
                metricsData?.data.find(({ poolId }) => poolId === poolAddress)
                  ?.metrics.tvl
              )
            ),
            position: 'right',
          },
          {
            Title: `${+(Number(metricsData?.data.find(({ poolId }) => poolId === poolAddress)?.metrics.apr) + Number(metricsData?.data.find(({ poolId }) => poolId === poolAddress)?.metrics.farmApr)).toFixed(2)}%`,
            position: 'right',
            color: '#34D399',
          },
          {
            Title: `${formatMoney(
              FixedPointMath.toNumber(
                BigNumber(
                  String(
                    accountFarmsData?.find(
                      (farm) =>
                        farm.farm ===
                        FARMS_BY_LP[poolAddress].address.toString()
                    )?.rewards ?? 0
                  )
                )
              )
            )} MOVE`,
            position: 'right',
          },
          {
            Content: (
              <Manage
                url={`${Routes[RoutesEnum.PortfolioDetails]}?address=${poolAddress}`}
              />
            ),
          },
        ],
      }))}
    />
  );
};

export default PortfolioCurvePools;
