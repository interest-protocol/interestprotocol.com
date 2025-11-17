import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import invariant from 'tiny-invariant';

import PoolName from '@/components/pool-name';
import { toasting } from '@/components/toast';
import { EXPLORER_URL, Network, Routes, RoutesEnum } from '@/constants';
import { MOVE } from '@/constants/coins';
import { FARMS_BY_LP, LPS_BY_FARMS } from '@/constants/farms';
import { POOLS } from '@/constants/pools';
import { useCoinsPrice, useModal } from '@/hooks';
import { useGetAccountFarmsData } from '@/hooks/use-get-farm-account-data';
import { useInterestCurveSdk } from '@/hooks/use-interest-curve-sdk';
import { useLPCoinsPrice } from '@/hooks/use-lp-coins-price';
import { useMetrics } from '@/hooks/use-metrics';
import { FixedPointMath } from '@/lib';
import { useAptosClient } from '@/lib/aptos-provider/aptos-client/aptos-client.hooks';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { formatDollars, formatMoney, ZERO_BIG_NUMBER } from '@/utils';

import Manage from '../components/manage';
import PoolNameSkeleton from '../components/pool-name-skeleton';
import PriceRange from '../components/price-range';
import RewardsModal from '../components/rewards-modal';
import PoolTypeTable from './components/pool-type-table';

const PortfolioCurvePools: FC = () => {
  const {
    coinsMap,
    loading: isCoinsMapLoading,
    mutate: mutateCoins,
  } = useCoins();
  const { setContent } = useModal();
  const client = useAptosClient();
  const { account } = useAptosWallet();
  const { data: metricsData, isLoading: isMetricsLoading } = useMetrics();
  const interestCurveSdk = useInterestCurveSdk();
  const {
    data: lpsPriceMap,
    isLoading: isLpsPricesLoading,
    mutate: mutateLpsPrices,
  } = useLPCoinsPrice();
  const { signAndSubmitTransaction } = useAptosWallet();
  const {
    data: accountFarmsData,
    isLoading: isAccountFarmsLoading,
    mutate: mutateAccountFarms,
  } = useGetAccountFarmsData();

  const { data: coinsPrice, isLoading: isCoinPriceLoading } = useCoinsPrice([
    MOVE.address.toString(),
  ]);
  const movePrice = coinsPrice?.[0]?.price;

  const claimableRewards = accountFarmsData?.reduce(
    (acc, farm) => BigNumber(String(acc)).plus(BigNumber(String(farm.rewards))),
    ZERO_BIG_NUMBER
  );

  const accountFarmsRecord = accountFarmsData?.reduce(
    (acc, item) => {
      acc[item.farm] = {
        rewards: item.rewards,
        amount: item.amount,
      };
      return acc;
    },
    {} as Record<string, { rewards: bigint; amount: bigint }>
  );

  const poolsPosition =
    !isAccountFarmsLoading && accountFarmsRecord
      ? POOLS.filter((pool) => {
          const farm = FARMS_BY_LP[pool.poolAddress];
          if (!farm) return false;

          const accountFarm =
            accountFarmsRecord[normalizeSuiAddress(farm.address.toString())];

          if (!accountFarm) return false;

          return (
            !BigNumber(String(accountFarm.amount)).isZero() ||
            !BigNumber(String(accountFarm.rewards)).isZero()
          );
        })
      : [];

  const stakedAmounts: ReadonlyArray<[string, BigNumber]> =
    accountFarmsData?.flatMap((farm) =>
      Number(farm.amount)
        ? [
            [
              LPS_BY_FARMS[farm.farm.toString()],
              BigNumber(farm.amount.toString()),
            ],
          ]
        : []
    ) ?? [];

  const lpCoinsBalance: ReadonlyArray<[string, BigNumber]> = POOLS.flatMap(
    ({ poolAddress }) =>
      coinsMap[poolAddress]
        ? [[poolAddress, coinsMap[poolAddress].balance]]
        : []
  );

  const data = [...stakedAmounts, ...lpCoinsBalance];

  const usdUserPosition = lpsPriceMap
    ? data.reduce(
        (acc, [lpToken, balance]) =>
          acc +
          (coinsMap?.[lpToken]?.decimals
            ? FixedPointMath.toNumber(balance, coinsMap[lpToken].decimals) *
              lpsPriceMap[lpToken].lpPrice
            : 0),
        0
      )
    : 0;
  const isLoading =
    isAccountFarmsLoading ||
    isCoinsMapLoading ||
    isLpsPricesLoading ||
    isMetricsLoading ||
    isCoinPriceLoading;

  const handleClaimRewards = async () => {
    try {
      invariant(account, 'You must be connected to proceed');
      invariant(accountFarmsData, 'Fail to get farms');

      const farmList = accountFarmsData
        .filter((item) => item.rewards.toString() !== '0')
        .map((item) => item.farm);

      const rewards = Object.values(FARMS_BY_LP)
        .filter((farm) => farmList.includes(farm.address.toString()))
        .map((farm) => farm.rewards.toString());

      const payload = interestCurveSdk.harvestAll({
        farms: farmList,
        rewardFas: rewards,
        recipient: account.address,
      });

      const tx = await signAndSubmitTransaction({ payload });

      invariant(tx.status === 'Approved', 'Rejected by User');

      const txResult = tx.args;

      let waitingTx = true;

      do {
        await client
          .waitForTransaction({
            transactionHash: txResult.hash,
            options: { checkSuccess: true },
          })
          .then(() => {
            waitingTx = false;
          })
          .catch();
      } while (waitingTx);

      await Promise.all([
        mutateAccountFarms(),
        mutateCoins(),
        mutateLpsPrices(),
      ]);

      toasting.success({
        action: 'Claim rewards',
        message: 'See on explorer',
        link: EXPLORER_URL[Network.MAINNET](`txn/${txResult.hash}`),
      });
    } catch (e) {
      //console.warn({ e });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((e as any)?.data?.error_code === 'mempool_is_full')
        throw new Error('The mempool is full, try again in a few seconds.');

      throw e;
    }
  };

  const onClaim = () => {
    if (claimableRewards)
      setContent(
        <RewardsModal
          onClaim={handleClaimRewards}
          totalEarnings={
            movePrice
              ? String(movePrice * FixedPointMath.toNumber(claimableRewards))
              : '0.00'
          }
          rewardsList={[
            {
              amount: formatMoney(FixedPointMath.toNumber(claimableRewards)),
              symbol: 'MOVE',
            },
          ]}
        />,
        {
          title: 'Rewards',
          titleAlign: 'center',
          showTitleOnMobile: true,
        }
      );
  };

  return (
    <PoolTypeTable
      isLoading={isLoading}
      headerSummary={{
        onClaim,
        title: 'Curve pools',
        total: String(poolsPosition.length),
        totalPosition: usdUserPosition
          ? formatDollars(usdUserPosition ?? 0)
          : undefined,
        gain: claimableRewards ? (
          `${formatMoney(FixedPointMath.toNumber(claimableRewards))} MOVE`
        ) : isAccountFarmsLoading ? (
          <Skeleton width={60} height={16} />
        ) : (
          '0 MOVE'
        ),
      }}
      tableHeader={[
        { description: 'Pool' },
        { description: 'Price', position: 'right', isSortable: true },
        { description: 'Liquidity', position: 'right', isSortable: true },
        { description: 'APR', position: 'right', isSortable: true },
        { description: 'Rewards', position: 'right', isSortable: true },
      ]}
      rows={poolsPosition.map(({ poolAddress, tokensAddresses }) => ({
        link: `${Routes[RoutesEnum.PortfolioDetails]}?address=${poolAddress}`,
        cells: [
          {
            Content: isLoading ? (
              <PoolNameSkeleton />
            ) : (
              <PoolName
                address={poolAddress}
                tokensAddresses={tokensAddresses}
              />
            ),
          },
          {
            Title: isLoading ? (
              <Div width="100%">
                <Skeleton width="100%" height={15} />
              </Div>
            ) : (
              <PriceRange address={poolAddress} />
            ),
          },
          {
            Title: isLoading ? (
              <Div width="100%">
                <Skeleton width="100%" height={15} />
              </Div>
            ) : (
              formatDollars(
                Number(
                  metricsData?.data.find(({ poolId }) => poolId === poolAddress)
                    ?.metrics.tvl
                )
              )
            ),
            position: 'right',
          },
          {
            Title: isLoading ? (
              <Div width="100%">
                <Skeleton width="100%" height={15} />
              </Div>
            ) : (
              `${+(Number(metricsData?.data.find(({ poolId }) => poolId === poolAddress)?.metrics.apr) + Number(metricsData?.data.find(({ poolId }) => poolId === poolAddress)?.metrics.farmApr)).toFixed(2)}%`
            ),
            position: 'right',
            color: '#34D399',
          },
          {
            Title: isLoading ? (
              <Div width="100%">
                <Skeleton width="100%" height={15} />
              </Div>
            ) : (
              `${formatMoney(
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
                MOVE.decimals
              )} MOVE`
            ),
            position: 'right',
          },
          {
            Content: isLoading ? (
              <Div width="100%">
                <Skeleton width="100%" height={15} />
              </Div>
            ) : (
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
