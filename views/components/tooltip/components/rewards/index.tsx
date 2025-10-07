import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import unikey from 'unikey';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { TokenStandard } from '@/lib/coins-manager/coins-manager.types';
import { getCoinMetadata, parseToMetadata } from '@/utils';
import { formatDollars } from '@/utils/string';

import { RewardsProps } from './rewards.types';

const Rewards: FC<RewardsProps> = ({ tokens }) => {
  const { data: metadata, isLoading } = useSWR(['pool-metadata', tokens], () =>
    Promise.all([...tokens].map((token) => getCoinMetadata(token))).then(
      (result) => result.map(parseToMetadata)
    )
  );

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
        {!isLoading && metadata ? (
          metadata.map(({ symbol, iconUri, standard }) => (
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
                {0}{' '}
                <Span color="#9CA3AF">({formatDollars(0, 6, 'start')})</Span>
              </P>
            </Div>
          ))
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
