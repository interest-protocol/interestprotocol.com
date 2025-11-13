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
import OverviewHeaderItem from './overview-header-item';

const OverviewHeader: FC<OverviewHeaderProps> = ({
  apr,
  tvl,
  volume,
  fees,
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
    <Div display="flex" flexDirection="column" gap="0.75rem">
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
          <Div gap="0.5rem" display="flex" flexDirection="column">
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
      <Div
        p="1rem"
        display="flex"
        gap="0.625rem"
        bg="#9CA3AF0D"
        borderRadius="0.5rem"
        justifyContent="space-between"
        border="1px solid #1F2937"
      >
        <OverviewHeaderItem title="TVL" value={tvl ? tvl : ''} />
        <OverviewHeaderItem title="24H Volume" value={volume ? volume : ''} />
        <OverviewHeaderItem title="24H Fees" value={fees ? fees : ''} />
        <OverviewHeaderItem title="Total APR" value={apr ? apr : ''} />
      </Div>
    </Div>
  );
};

export default OverviewHeader;
