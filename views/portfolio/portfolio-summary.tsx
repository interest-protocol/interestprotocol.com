import { AccountAddress } from '@aptos-labs/ts-sdk';
import { Div } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { MOVE } from '@/constants/coins';
import { useCoinsPrice } from '@/hooks/use-coins-price';
import { useGetAccountFarmsData } from '@/hooks/use-get-farm-account-data';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { formatDollars, ZERO_BIG_NUMBER } from '@/utils';

import MetricInfo from './components/metric-info';

const PortfolioSummary: FC = () => {
  const { coins, coinsMap } = useCoins();
  const { data: accountFarmsData, isLoading: isAccountFarmsLoading } =
    useGetAccountFarmsData();

  const { data: coinsPrice, isLoading: isCoinsPriceLoading } = useCoinsPrice(
    coins.map((coin) => coin.type)
  );

  const movePrice = coinsPrice?.find(({ coin }) => {
    try {
      return MOVE.address.equals(AccountAddress.from(coin));
    } catch {
      return false;
    }
  })?.price;

  const netWorthUSD = coinsPrice?.reduce(
    (acc, { coin, price }) =>
      acc +
      (coinsMap[coin]
        ? price *
          FixedPointMath.toNumber(
            coinsMap[coin].balance,
            coinsMap[coin].decimals
          )
        : 0),
    0
  );

  const claimableRewards = accountFarmsData?.reduce(
    (acc, reward) =>
      BigNumber(String(acc)).plus(BigNumber(String(reward.rewards))),
    ZERO_BIG_NUMBER
  );

  const claimableRewardsUSD =
    FixedPointMath.toNumber(claimableRewards ?? ZERO_BIG_NUMBER, 8) *
    (movePrice ?? 0);

  return (
    <Div
      width="100%"
      display="grid"
      gap={['0.5rem', '0.5rem', '0.5rem', '1rem']}
      gridTemplateColumns={[
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ]}
    >
      <MetricInfo
        title="Net worth"
        value={netWorthUSD ? formatDollars(+netWorthUSD.toFixed(4)) : '--'}
        isLoading={isCoinsPriceLoading}
      />

      <MetricInfo
        title="Claimable rewards"
        value={
          claimableRewardsUSD
            ? formatDollars(+claimableRewardsUSD.toFixed(4))
            : '--'
        }
        isLoading={isCoinsPriceLoading || isAccountFarmsLoading}
      />
    </Div>
  );
};

export default PortfolioSummary;
