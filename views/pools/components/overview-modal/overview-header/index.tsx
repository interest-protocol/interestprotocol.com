import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';

import { TokenIcon } from '@/components';
import Filter from '@/components/filter';
import { Network } from '@/constants';
import { getCoinMetadata, parseToMetadata } from '@/utils';
import {
  AGGREGATION_MAP,
  AGGREGATION_REVERSE_MAP,
} from '@/views/pools/header-summary/header-summary.data';
import { Aggregation } from '@/views/pools/header-summary/pool-header-summary.types';

import { OverviewHeaderProps } from './overview-header.types';

const OverviewHeader: FC<OverviewHeaderProps> = ({
  apr,
  address,
  symbols,
  aggregation,
  setAggregation,
  tokensAddresses,
}) => {
  const { data: metadata, isLoading } = useSWR(
    ['pool-metadata', tokensAddresses, address],
    () =>
      Promise.all(
        [address, ...tokensAddresses].map((token) => getCoinMetadata(token))
      ).then((result) => result.map(parseToMetadata))
  );

  const [poolMetadata, ...tokensMetadata] = metadata ?? [];

  return (
    <Div display="flex" alignItems="center" justifyContent="space-between">
      <Div gap="1rem" display="flex" alignItems="center">
        <TokenIcon
          withBg
          rounded
          size="1.25rem"
          url={poolMetadata?.iconUri}
          network={Network.MovementMainnet}
          symbol={poolMetadata?.symbol || address}
        />
        <Div gap="0.25rem" display="flex" flexDirection="column">
          <P
            color="#FFFFFF"
            fontWeight="500"
            fontFamily="Inter"
            fontSize="0.875rem"
          >
            {symbols?.join(' • ') ??
              (isLoading ? (
                <Skeleton width={100} height={14} />
              ) : (
                tokensMetadata.map((item) => item.symbol).join(' • ')
              ))}
          </P>
          <P
            fontWeight="400"
            color="#9CA3AF"
            fontFamily="Inter"
            lineHeight="1.25rem"
            fontSize="0.86125rem"
          >
            {apr}
          </P>
        </Div>
      </Div>

      <Filter
        options={['D', 'W']}
        labels={['24H', '7D']}
        interval={AGGREGATION_REVERSE_MAP[aggregation]}
        setInterval={(value) =>
          setAggregation(AGGREGATION_MAP[value as Aggregation])
        }
      />
    </Div>
  );
};

export default OverviewHeader;
