import { Div, Span } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { FixedPointMath } from '@/lib';

import { usePoolDetailsContext } from '../pool-details.context';

const PoolBalance: FC = () => {
  const { pool, loading } = usePoolDetailsContext();

  const liveBalanceData =
    pool.tokensMetadata?.map((token, index) => ({
      token,
      balance: +FixedPointMath.toNumber(
        BigNumber(String(pool.balances?.[index] ?? 0)),
        18
      ).toFixed(6),
    })) ?? [];

  const total = liveBalanceData.reduce((acc, { balance }) => acc + balance, 0);

  return (
    <Div
      key={v4()}
      gap="0.75rem"
      flexWrap="wrap"
      display="flex"
      justifyContent={[
        'space-between',
        'space-between',
        'space-between',
        'flex-end',
      ]}
      flexDirection={['row', 'row', 'row', 'column']}
      alignItems={['center', 'center', 'center', 'unset']}
    >
      <Span
        fontWeight="400"
        color="#9CA3AF"
        textAlign="right"
        fontSize="0.875rem"
        lineHeight={['1.25rem', '1.25rem', '1.25rem', '1.75rem']}
      >
        Pool Balance
      </Span>
      <Div
        display="flex"
        gap="0.5rem"
        alignItems="center"
        justifyContent="flex-end"
      >
        {loading ? (
          <Skeleton width={100} height={30} />
        ) : (
          liveBalanceData.map(({ token, balance }) => (
            <Div display="flex" gap="0.5rem" key={v4()}>
              <TokenIcon
                withBg
                size="1rem"
                url={token.iconUri}
                symbol={token.symbol}
                network={Network.MovementMainnet}
              />
              <Span
                color="#fff"
                fontWeight="500"
                lineHeight={['2rem', '2rem', '2rem', '1.75rem']}
                fontSize={['1.125rem', '1.125rem', '1.125rem', '0.875rem']}
              >
                {+((balance / total) * 100).toFixed(2)}%
              </Span>
            </Div>
          ))
        )}
      </Div>
    </Div>
  );
};

export default PoolBalance;
