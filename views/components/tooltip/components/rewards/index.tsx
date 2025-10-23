import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, P, Span } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import unikey from 'unikey';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { useCoinsPrice } from '@/hooks';
import { useFarmAccount } from '@/hooks/use-farm-account';
import { useFarms } from '@/hooks/use-farms';
import { FixedPointMath } from '@/lib';
import { TokenStandard } from '@/lib/coins-manager/coins-manager.types';
import { getCoinMetadata, parseToMetadata } from '@/utils';
import { formatDollars, formatMoney } from '@/utils/string';

import { RewardsProps } from './rewards.types';

const Rewards: FC<RewardsProps> = ({ poolAddress }) => {
  const [rewardsPerDay, setRewardsPerDay] = useState(0);
  const { data, isLoading: isLoadingFarmAccount } = useFarmAccount(poolAddress);
  const { data: farm, isLoading: isLoadingFarms } = useFarms([
    poolAddress ?? '',
  ]);

  const tokens = isLoadingFarmAccount
    ? []
    : data?.rewards.map((reward) => normalizeSuiAddress(reward.fa));

  const { data: priceList, isLoading: isPriceLoading } = useCoinsPrice(
    tokens || ''
  );

  const { data: metadata, isLoading } = useSWR(['pool-metadata', tokens], () =>
    Promise.all(
      [...(tokens || [])].map((token) => getCoinMetadata(token))
    ).then((result) => result.map(parseToMetadata))
  );

  const DAYS_PER_SECONDS = 86400;

  const loading =
    isLoading && isLoadingFarmAccount && isPriceLoading && isLoadingFarms;

  useEffect(() => {
    setRewardsPerDay(
      loading
        ? 0
        : FixedPointMath?.toNumber(
            BigNumber(String(farm?.[0]?.rewards[0].rewardsPerSecond || 0))
          ) * DAYS_PER_SECONDS
    );
  }, [loading, farm]);

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
        {!loading && metadata ? (
          metadata.length ? (
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
                  {formatMoney(rewardsPerDay)}
                  <Span color="#9CA3AF">
                    (
                    {formatDollars(
                      rewardsPerDay * (priceList?.[index]?.price ?? 0),
                      6,
                      'start'
                    )}
                    )
                  </Span>
                </P>
              </Div>
            ))
          ) : (
            <P color="#929292" fontSize="0.75rem" textDecoration="">
              No Rewards founded
            </P>
          )
        ) : (
          <>
            <Skeleton height="16px" width="100%" />
            <Skeleton height="16px" width="100%" />
          </>
        )}
      </Div>
    </Div>
  );
};
export default Rewards;
