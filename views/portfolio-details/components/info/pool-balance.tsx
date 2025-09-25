import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { formatMoney } from '@/utils';

import { PortfolioDetailsFormProps } from '../../portfolio-details.types';

const PoolBalance: FC = () => {
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();

  const tokenList = getValues('tokenList');

  const allBalance = +tokenList[0].value + +tokenList[1].value;

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
        {tokenList.map((token) => (
          <Div gap="0.4rem" key={v4()} display="flex" alignItems="center">
            <P
              fontWeight="500"
              color="#FFFFFF"
              fontFamily="Inter"
              fontSize={['1rem', '1.5rem']}
            >
              {formatMoney(+token.value)}
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
      {allBalance ? (
        <Div
          gap="0.2rem"
          width="100%"
          display="flex"
          height="0.875rem"
          overflow="hidden"
          borderRadius="1rem"
        >
          {tokenList.map((token, index) => (
            <Div
              key={v4()}
              width={`${(+token.value / allBalance) * 100}%`}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="0.75rem"
              color={index === 0 ? '#FFFFFF' : '#000000'}
              background={index === 0 ? '#2774CA' : '#00B989'}
            >
              {((+token.value / allBalance) * 100).toFixed(2)}%
            </Div>
          ))}
        </Div>
      ) : null}
    </Div>
  );
};

export default PoolBalance;
