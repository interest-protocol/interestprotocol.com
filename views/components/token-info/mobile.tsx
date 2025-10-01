import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';

import APR from '../apr';
import { TokenInfoProps } from './token-info.types';

const TokenInfoMobile: FC<TokenInfoProps> = ({ isV3 }) => {
  const { pool, loading } = usePoolDetailsContext();

  return (
    <Div
      justifyContent="space-between"
      display={['flex', 'flex', 'flex', 'none']}
    >
      <Div gap="0.5rem" display="flex" alignItems="center">
        <TokenIcon
          withBg
          size="1.52rem"
          network={Network.MAINNET}
          url={loading ? undefined : pool.poolMetadata?.iconUri}
          symbol={
            loading
              ? 'loading...'
              : (pool.tokensMetadata?.map((token) => token.symbol).join('-') ??
                'none')
          }
        />
        <P
          fontWeight="600"
          color="#E5E7EB"
          fontFamily="Inter"
          fontSize="1.25rem"
          lineHeight="1.875rem"
        >
          {loading
            ? 'loading...'
            : (pool.tokensMetadata?.map((token) => token.symbol).join('-') ??
              'none')}
        </P>
      </Div>
      {!isV3 && <APR />}
    </Div>
  );
};

export default TokenInfoMobile;
