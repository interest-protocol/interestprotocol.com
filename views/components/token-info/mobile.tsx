import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';

import APR from '../apr';
import { TokenInfoProps } from './token-info.types';

const TokenInfoMobile: FC<TokenInfoProps> = ({ isV3 }) => {
  const { pool, loading } = usePoolDetailsContext();
  const isInfuraURL = (pool.poolMetadata?.iconUri as string)?.includes(
    'infura-ipfs'
  );
  return (
    <Div
      justifyContent="space-between"
      display={['flex', 'flex', 'flex', 'none']}
    >
      <Div gap="0.5rem" display="flex" alignItems="center">
        {loading || !pool?.poolMetadata ? (
          <>
            <Skeleton circle width={40} height={40} />
            <Skeleton width={100} height={20} />
          </>
        ) : (
          <>
            <TokenIcon
              withBg
              size="1.52rem"
              network={Network.MAINNET}
              url={
                loading || isInfuraURL ? undefined : pool.poolMetadata?.iconUri
              }
              symbol={
                loading || !pool?.poolMetadata
                  ? 'loading...'
                  : pool?.poolMetadata?.symbol
              }
            />
            <P
              fontWeight="600"
              color="#E5E7EB"
              fontFamily="Inter"
              fontSize="1.25rem"
              lineHeight="1.875rem"
            >
              {loading || !pool?.poolMetadata
                ? 'loading...'
                : (pool.tokensMetadata
                    ?.map((token) => token.symbol)
                    .join('-') ?? '--')}
            </P>
          </>
        )}
      </Div>
      {!isV3 && <APR />}
    </Div>
  );
};

export default TokenInfoMobile;
