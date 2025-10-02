import { Div, P, Span } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { useFarmAccount } from '@/hooks/use-farm-account';
import { useCurveLPPrice } from '@/hooks/use-v2-lp-price';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { ZERO_BIG_NUMBER } from '@/utils';
import { formatDollars } from '@/utils/string';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';

const YourPositionBanner: FC = () => {
  const { coinsMap } = useCoins();
  const {
    pool: { poolAddress },
  } = usePoolDetailsContext();

  const { data: farmAccount } = useFarmAccount(poolAddress);
  const { data: lpPriceCustom } = useCurveLPPrice(poolAddress);

  const lpPrice = lpPriceCustom?.lpPrice || 0;

  const lpToken = coinsMap[poolAddress];

  const stakedBalance = farmAccount?.amount
    ? BigNumber(String(farmAccount.amount))
    : ZERO_BIG_NUMBER;

  const balance = (lpToken?.balance ?? ZERO_BIG_NUMBER)
    .plus(stakedBalance)
    .times(lpPrice);

  return (
    <Div
      gap="0.5rem"
      display="flex"
      bg="#9CA3AF1A"
      p="0.75rem 1rem"
      alignItems="center"
      borderRadius="0.75rem"
      justifyContent="space-between"
      border="1px solid #9CA3AF1A"
    >
      <P
        fontSize="1rem"
        fontWeight="500"
        color="#9CA3AF"
        fontFamily="Inter"
        lineHeight="1.5rem"
      >
        Your position:
      </P>
      <Span
        fontSize="1rem"
        fontWeight="500"
        color="#FFFFFF"
        fontFamily="Inter"
        lineHeight="1.5rem"
      >
        {formatDollars(
          FixedPointMath.toNumber(balance, lpToken?.decimals),
          6,
          'start'
        )}
      </Span>
    </Div>
  );
};

export default YourPositionBanner;
