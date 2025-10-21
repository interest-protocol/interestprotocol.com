import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { TokenIcon } from '@/components';
import { Button } from '@/components/button';
import { CopySVG } from '@/components/svg';
import { Network } from '@/constants';
import { FixedPointMath } from '@/lib';
import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';
import { formatAddress, formatMoney } from '@/utils';
import CollapseCardInfo from '@/views/components/collapse-card-info';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import PoolDetailsInformation from '../../../components/pool-information-collapse';
import { usePoolDetailsContext } from '../../pool-details.context';

const PoolDetailsInfo: FC = () => {
  const { setValue } = useFormContext<PortfolioDetailsFormProps>();
  const { pool, loading } = usePoolDetailsContext();

  useEffect(() => {
    if (loading) return;

    if (!pool || pool.curve != 'stable') return;

    const ratio = pool.tokensAddresses?.map(
      (address, index) =>
        +FixedPointMath.toNumber(
          BigNumber(String(pool.balances?.[index] ?? 0)),
          pool.algorithm === 'curve'
            ? 18
            : (metadata?.[normalizeSuiAddress(address)]?.decimals ?? 8)
        )
    );
    const [token0Balance, token1Balance] = ratio;

    setValue('ratio', [
      token1Balance / token0Balance,
      token0Balance / token1Balance,
    ]);
  }, [loading, pool]);

  if (!pool) return 'Loading...';

  if (!pool?.poolExtraData || !pool?.tokensMetadata) return 'Loading...';

  const metadata = pool.tokensMetadata?.reduce(
    (acc, curr) => ({ ...acc, [curr.type]: curr }),
    {} as Record<string, AssetMetadata>
  );

  const LIVE_BALANCE_DATA = pool.tokensMetadata?.map((token, index) => ({
    info: {
      description: token.symbol,
    },
    value: {
      description: `${formatMoney(
        +FixedPointMath.toNumber(
          BigNumber(String(pool.balances?.[index] ?? 0)),
          pool.algorithm === 'curve'
            ? 18
            : (metadata?.[normalizeSuiAddress(token.type)]?.decimals ?? 8)
        ).toFixed(6)
      )}`,
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
      <PoolDetailsInformation />
      <CollapseCardInfo title="Live balance" data={LIVE_BALANCE_DATA ?? []} />
      <CollapseCardInfo title="Assets" data={ASSETS_DATA ?? []} />
    </Div>
  );
};

export default PoolDetailsInfo;
