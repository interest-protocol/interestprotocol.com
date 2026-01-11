import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';

const TokenInfoDesktop: FC = () => {
  const { pool, loading } = usePoolDetailsContext();

  const isInfuraURL = (pool.poolMetadata?.iconUri as string)?.includes(
    'infura-ipfs'
  );

  return (
    <Div
      gap="1rem"
      alignItems="center"
      display={['none', 'none', 'none', 'flex']}
    >
      {loading || !pool.poolMetadata ? (
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
              loading
                ? undefined
                : isInfuraURL
                  ? undefined
                  : pool.poolMetadata?.iconUri
            }
            symbol={loading ? 'loading...' : pool.poolMetadata.symbol}
          />
          <P
            fontWeight="600"
            color="#E5E7EB"
            fontFamily="Inter"
            fontSize="1.75rem"
            lineHeight="2.8125rem"
          >
            {loading || !pool.tokensMetadata
              ? 'loading...'
              : (pool.tokensMetadata?.map((token) => token.symbol).join('-') ??
                '--')}
          </P>
        </>
      )}
    </Div>
  );
};

export default TokenInfoDesktop;
