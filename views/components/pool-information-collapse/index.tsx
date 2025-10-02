import {
  StablePool,
  VolatilePool,
} from '@interest-protocol/interest-aptos-curve';
import BigNumber from 'bignumber.js';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Button } from '@/components/button';
import { CopySVG } from '@/components/svg';
import { FixedPointMath } from '@/lib';
import { formatAddress, formatDollars, formatMoney } from '@/utils';
import CollapseCardInfo from '@/views/components/collapse-card-info';
import { CollapseCardInfoLineProps } from '@/views/components/collapse-card-info/collapse-card-info.types';

import { usePoolDetailsContext } from '../../pool-details/pool-details.context';
import { PoolInformationCollapseProps } from './pool-information-collapse.types';

const PoolDetailsInformation: FC<PoolInformationCollapseProps> = ({
  title,
}) => {
  const { query } = useRouter();
  const { pool } = usePoolDetailsContext();

  if (!pool) return 'Loading...';

  if (!pool?.poolExtraData || !pool?.tokensMetadata) return 'Loading...';

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

  return (
    <CollapseCardInfo
      title={title || 'Pool information'}
      data={POOL_INFORMATION_DATA}
    />
  );
};

export default PoolDetailsInformation;
