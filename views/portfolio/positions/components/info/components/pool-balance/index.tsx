import { Div, Img, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { formatMoney } from '@/utils';

import { PoolBalanceProps } from './pool-balance.types';

const PoolBalance: FC<PoolBalanceProps> = ({ pairTokens }) => {
  return (
    <Div gap="0.75rem" width="100%" display="flex" flexDirection="column">
      <P
        color="#9CA3AF"
        fontWeight="400"
        fontSize="0.75rem"
        fontFamily="Inter"
        lineHeight="1.75rem"
      >
        Pool Balances
      </P>
      <Div display="flex" alignItems="center" justifyContent="space-between">
        {pairTokens.map((token, index) => (
          <Div gap="0.4rem" key={index} display="flex" alignItems="center">
            <P
              color="#FFFFFF"
              fontWeight="500"
              fontSize="1.5rem"
              fontFamily="Inter"
            >
              {formatMoney(token.value)}
            </P>
            <Img
              width="1.5rem"
              height="1.5rem"
              src={token.icon}
              alt={token.symbol}
              borderRadius="50%"
            />
            <Span
              fontWeight="500"
              color="#FFFFFF"
              fontSize="1.5rem"
              fontFamily="Inter"
            >
              {token.symbol}
            </Span>
          </Div>
        ))}
      </Div>

      <Div
        gap="0.2rem"
        width="100%"
        display="flex"
        height="0.875rem"
        overflow="hidden"
        borderRadius="1rem"
      >
        {pairTokens.map((token, index) => (
          <Div
            key={index}
            width={`${token.percent}%`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="0.75rem"
            color={index % 2 === 0 ? '#FFFFFF' : '#000000'}
            background={index % 2 === 0 ? '#2774CA' : '#00B989'}
          >
            {token.percent.toFixed(2)}%
          </Div>
        ))}
      </Div>
    </Div>
  );
};

export default PoolBalance;
