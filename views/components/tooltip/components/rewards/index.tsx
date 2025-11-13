import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, P, Span } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC, useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import unikey from 'unikey';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { useCoinsPrice } from '@/hooks';
import { useFarms } from '@/hooks/use-farms';
import { FixedPointMath } from '@/lib';
import { TokenStandard } from '@/lib/coins-manager/coins-manager.types';
import { getCoinMetadata, parseToMetadata } from '@/utils';
import { formatDollars, formatMoney } from '@/utils/string';

import { RewardsProps } from './rewards.types';

const DAYS_PER_SECONDS = 86400;

const Rewards: FC<RewardsProps> = ({ poolAddress }) => {
  const { data: farm, isLoading: isLoadingFarms } = useFarms([
    poolAddress ?? '',
  ]);

  const tokens = useMemo(
    () =>
      farm?.flatMap((currentFarm) =>
        currentFarm.rewards.map((reward) =>
          normalizeSuiAddress(reward.rewardFa.address)
        )
      ) || [],
    [isLoadingFarms]
  );

  const { data: priceList, isLoading: isPriceLoading } = useCoinsPrice(
    tokens || ''
  );

  const { data: metadata, isLoading: isLoadingMetadata } = useSWR(
    tokens.length > 0 ? ['pool-metadata', tokens] : null,
    () =>
      Promise.all(tokens.map((token) => getCoinMetadata(token))).then(
        (result) => result.map(parseToMetadata)
      )
  );

  const isLoading = isLoadingMetadata || isPriceLoading || isLoadingFarms;

  const rewardsPerDay = useMemo(() => {
    if (!farm?.[0]?.rewards || farm[0].rewards.length === 0) {
      return [];
    }

    return farm[0].rewards.map((reward) => {
      const rewardsPerSecond = BigNumber(String(reward.rewardsPerSecond || 0));
      return FixedPointMath?.toNumber(rewardsPerSecond) * DAYS_PER_SECONDS;
    });
  }, [farm]);

  return (
    <Div mt="1.5rem" gap="0.5rem">
      <Div mb="1rem" display="flex" alignItems="center">
        <P
          color="#9CA3AF"
          fontWeight="400"
          fontFamily="Inter"
          fontSize="0.875rem"
        >
          Rewards per day
        </P>
        <Div
          flex="1"
          mx="0.5rem"
          height="1px"
          borderBottom="1px dashed #4B556380"
        />
      </Div>

      <Div display="flex" flexDirection="column" gap="0.5rem">
        {isLoading ? (
          <>
            <Skeleton height="16px" width="100%" />
            <Skeleton height="16px" width="100%" />
          </>
        ) : metadata && metadata.length > 0 && rewardsPerDay.length > 0 ? (
          metadata.map(({ symbol, iconUri, standard }, index) => (
            <Div
              key={unikey()}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <TokenIcon
                withBg
                size="16px"
                url={iconUri}
                symbol={symbol}
                network={Network.MovementMainnet}
                rounded={standard === TokenStandard.COIN}
              />

              <Span
                ml="0.5rem"
                color="#FFFFFF"
                fontWeight="400"
                fontFamily="Inter"
                fontSize="0.875rem"
              >
                {symbol}
              </Span>

              <Div
                flex="1"
                mx="0.5rem"
                height="1px"
                borderBottom="1px dashed #4B556380"
              />

              <P
                color="#FFFFFF"
                fontWeight="400"
                fontFamily="Inter"
                fontSize="0.875rem"
              >
                {formatMoney(rewardsPerDay[index] || 0)}
                <Span color="#9CA3AF">
                  {' '}
                  (
                  {formatDollars(
                    (rewardsPerDay[index] || 0) *
                      (priceList?.[index]?.price ?? 0),
                    6,
                    'start'
                  )}
                  )
                </Span>
              </P>
            </Div>
          ))
        ) : (
          <P color="#929292" fontSize="0.75rem">
            No Rewards found
          </P>
        )}
      </Div>
    </Div>
  );
};

export default Rewards;
