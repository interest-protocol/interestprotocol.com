import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import { Button } from '@/components/button';
import { CopySVG } from '@/components/svg';
import { Network } from '@/constants';
import { formatAddress } from '@/utils';
import CollapseCardInfo from '@/views/components/collapse-card-info';
import { POOL_INFORMATION_DATA } from '@/views/pool-details/pools.data';

import { usePoolDetailsContext } from '../pool-details.context';

const PoolDetailsInfo: FC = () => {
  const { pool } = usePoolDetailsContext();

  const LIVE_BALANCE_DATA = pool.tokensMetadata?.map((token) => ({
    info: {
      description: token.symbol,
    },
    value: {
      description: '0',
    },
  }));

  const ASSETS_DATA = pool.tokensMetadata?.map((token) => ({
    info: {
      description: token.symbol,
      Prefix: (
        <TokenIcon
          withBg
          size="0.8rem"
          url={token.iconUri}
          symbol={token.symbol}
          network={Network.MAINNET}
        />
      ),
    },
    value: {
      description: formatAddress(token.type),
      Suffix: (
        <Button
          p="unset"
          border="none"
          color="#fff"
          variant="text"
          nHover={{
            color: '#B4C5FF',
          }}
        >
          <CopySVG maxWidth="1rem" maxHeight="1rem" width="1rem" />
        </Button>
      ),
    },
  }));

  return (
    <Div display="flex" gap="1rem" flexDirection="column" width="100%">
      <P
        color="#fff"
        fontWeight="400"
        fontSize="1.5rem"
        lineHeight="2.25rem"
        letterSpacing="-0.75px"
      >
        Pool details
      </P>
      <CollapseCardInfo title="Pool information" data={POOL_INFORMATION_DATA} />
      <CollapseCardInfo title="Live balance" data={LIVE_BALANCE_DATA ?? []} />
      <CollapseCardInfo title="Assets" data={ASSETS_DATA ?? []} />
    </Div>
  );
};

export default PoolDetailsInfo;
