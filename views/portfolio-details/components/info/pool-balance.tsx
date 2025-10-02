import { Div, P, Span } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { v4 } from 'uuid';

import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { FixedPointMath } from '@/lib';
import { formatMoney } from '@/utils';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';

const PoolBalance: FC = () => {
  const { pool } = usePoolDetailsContext();

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
    <Div gap="0.75rem" width="100%" display="flex" flexDirection="column">
      <P
        fontWeight="400"
        color="#9CA3AF"
        fontSize="0.75rem"
        fontFamily="Inter"
        lineHeight="1.75rem"
      >
        Pool Balances
      </P>
      <Div display="flex" alignItems="center" justifyContent="space-between">
        {liveBalanceData.map(({ token, balance }) => (
          <Div gap="0.4rem" key={v4()} display="flex" alignItems="center">
            <P
              fontWeight="500"
              color="#FFFFFF"
              fontFamily="Inter"
              fontSize={['1rem', '1.5rem']}
            >
              {formatMoney(balance)}
            </P>
            <TokenIcon
              withBg
              rounded
              size="0.906rem"
              url={token.iconUri}
              symbol={token.symbol}
              network={Network.MovementMainnet}
            />

            <Span
              fontWeight="500"
              color="#FFFFFF"
              fontFamily="Inter"
              fontSize={['1rem', '1.5rem']}
            >
              {token.symbol}
            </Span>
          </Div>
        ))}
      </Div>
      {total ? (
        <Div
          gap="0.2rem"
          width="100%"
          display="flex"
          height="0.875rem"
          overflow="hidden"
          borderRadius="1rem"
        >
          {liveBalanceData.map(({ balance }, index) => (
            <Div
              key={v4()}
              width={`${(balance / total) * 100}%`}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="0.75rem"
              color={index === 0 ? '#FFFFFF' : '#000000'}
              background={index === 0 ? '#2774CA' : '#00B989'}
            >
              {((balance / total) * 100).toFixed(2)}%
            </Div>
          ))}
        </Div>
      ) : null}
    </Div>
  );
};

export default PoolBalance;
