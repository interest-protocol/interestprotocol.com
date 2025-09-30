import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import useSWR from 'swr';
import { v4 } from 'uuid';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { FARMS_BY_LP } from '@/constants/farms';
import { POOLS } from '@/constants/pools';
import { getCoinMetadata, parseToMetadata } from '@/utils';

import { Button } from '../button';
import { TAG_COLOR } from './pool-name.data';
import { PoolNameProps } from './pool-name.types';

const PoolName: FC<PoolNameProps> = ({ address, tokensAddresses, symbols }) => {
  const { data: metadata, isLoading } = useSWR(
    ['pool-metadata', tokensAddresses, address],
    () =>
      Promise.all(
        [address, ...tokensAddresses].map((token) => getCoinMetadata(token))
      ).then((result) => result.map(parseToMetadata))
  );

  const [poolMetadata, ...tokensMetadata] = metadata ?? [];

  const isEarn = !!FARMS_BY_LP[address];
  const isCurve = POOLS.some((pool) => pool.poolAddress === address);
  const isStable = POOLS.some(
    (pool) => pool.poolAddress === address && pool.curve === 'stable'
  );

  return (
    <>
      <TokenIcon
        withBg
        rounded
        size="20px"
        network={Network.MAINNET}
        url={poolMetadata?.iconUri}
        symbol={poolMetadata?.symbol || address}
      />
      <Div>
        <P
          color="#fff"
          fontWeight="500"
          fontFamily="Inter"
          fontSize="0.875rem"
          lineHeight="1.12rem"
        >
          {symbols?.join(' • ') ??
            (isLoading
              ? 'Loading...'
              : tokensMetadata.map((item) => item.symbol).join(' • '))}
        </P>
        <Div display="flex" gap="0.25rem" mt="0.25rem">
          {[
            ...(isEarn ? ['earn'] : []),
            ...(isCurve ? ['curve'] : []),
            isStable ? 'stable' : 'volatile',
          ].map((item) => (
            <Button
              key={v4()}
              px="0.5rem"
              py="0.25rem"
              variant="filled"
              fontWeight="500"
              lineHeight="1rem"
              fontSize="0.75rem"
              border="1px solid"
              bg={TAG_COLOR[item]?.bg ?? '#9CA3AF1A'}
              textTransform="capitalize"
              color={TAG_COLOR[item]?.color ?? '#9CA3AF'}
              borderColor={TAG_COLOR[item]?.color ?? '#9CA3AF'}
              nHover={{
                borderColor: TAG_COLOR[item]?.bg ?? '#9CA3AF1A',
                fontWeight: 'bold',
              }}
            >
              {item}
            </Button>
          ))}
        </Div>
      </Div>
    </>
  );
};

export default PoolName;
