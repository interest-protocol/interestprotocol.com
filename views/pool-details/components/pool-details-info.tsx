import {
  StablePool,
  VolatilePool,
} from '@interest-protocol/interest-aptos-curve';
import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import { Button } from '@/components/button';
import { CopySVG } from '@/components/svg';
import { Network } from '@/constants';
import { FixedPointMath } from '@/lib';
import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';
import { formatAddress, formatDollars, formatMoney } from '@/utils';
import CollapseCardInfo from '@/views/components/collapse-card-info';
import { CollapseCardInfoLineProps } from '@/views/components/collapse-card-info/collapse-card-info.types';

import { usePoolDetailsContext } from '../pool-details.context';

const PoolDetailsInfo: FC = () => {
  const { query } = useRouter();
  const { pool } = usePoolDetailsContext();

  if (!pool) return 'Loading...';

  if (!pool?.poolExtraData || !pool?.tokensMetadata) return 'Loading...';

  const metadata = pool.tokensMetadata?.reduce(
    (acc, curr) => ({ ...acc, [curr.type]: curr }),
    {} as Record<string, AssetMetadata>
  );

  const isVolatile = pool.curve == 'volatile';

  const getVolatileData = (): ReadonlyArray<CollapseCardInfoLineProps> => {
    const poolExtraData = pool.poolExtraData as unknown as VolatilePool;
    const priceRaw = poolExtraData?.prices[pool.tokensAddresses[1]];
    const price = priceRaw?.price
      ? `${formatMoney(FixedPointMath.toNumber(BigNumber(String(priceRaw?.price)), 18), 6)} ${pool.tokensMetadata?.[0]?.symbol}`
      : '0';
    const lastPrice = priceRaw?.lastPrice
      ? `${formatMoney(FixedPointMath.toNumber(BigNumber(String(priceRaw.lastPrice)), 18), 6)} ${pool.tokensMetadata?.[0]?.symbol}`
      : '0';
    return [
      {
        info: { description: 'A' },
        value: {
          description: `${FixedPointMath.toNumber(BigNumber(poolExtraData?.a || '0'), 0)}`,
        },
      },
      {
        info: { description: 'Gamma' },
        value: {
          description: `${
            (FixedPointMath.toNumber(
              BigNumber(poolExtraData?.gamma || '0'),
              0
            ) /
              1e18) *
            100
          } %`,
        },
      },
      {
        info: {
          description: `${pool.tokensMetadata ? pool?.tokensMetadata[1].symbol : ''} Price`,
        },
        value: { description: price },
      },
      {
        info: {
          description: `${pool.tokensMetadata ? pool?.tokensMetadata[1].symbol : ''} Last Price`,
        },
        value: { description: lastPrice },
      },
      {
        info: { description: 'Virtual Price' },
        value: {
          description: formatDollars(
            FixedPointMath.toNumber(
              BigNumber(String(poolExtraData?.virtualPrice || 0)),
              18
            ),
            4
          ),
        },
      },
      {
        info: { description: 'Swap fee' },
        value: {
          description: `${formatMoney(
            FixedPointMath.toNumber(
              BigNumber(String(poolExtraData.fees.midFee))
            )
          )}% - ${formatMoney(
            FixedPointMath.toNumber(
              BigNumber(String(poolExtraData.fees.outFee))
            )
          )}%`,
        },
      },
    ];
  };

  const getStableData = (): ReadonlyArray<CollapseCardInfoLineProps> => {
    const poolExtraData = pool.poolExtraData as unknown as StablePool;
    return [
      {
        info: { description: 'A' },
        value: {
          description: `${FixedPointMath.toNumber(
            BigNumber(String(poolExtraData.initialA)),
            0
          )}`,
        },
      },
    ];
  };

  const POOL_INFORMATION_DATA: ReadonlyArray<CollapseCardInfoLineProps> = [
    {
      info: { description: 'Address' },
      value: {
        description: formatAddress(query.address as string) ?? 'N/A',
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
    },
    {
      info: { description: 'Pool type' },
      value: { description: pool.algorithm.toUpperCase() },
    },
    {
      info: { description: 'Algorithm' },
      value: { description: pool.curve },
    },
    ...(pool.algorithm === 'curve'
      ? isVolatile
        ? getVolatileData()
        : getStableData()
      : []),
  ];

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
      <CollapseCardInfo title="Pool information" data={POOL_INFORMATION_DATA} />
      <CollapseCardInfo title="Live balance" data={LIVE_BALANCE_DATA ?? []} />
      <CollapseCardInfo title="Assets" data={ASSETS_DATA ?? []} />
    </Div>
  );
};

export default PoolDetailsInfo;
