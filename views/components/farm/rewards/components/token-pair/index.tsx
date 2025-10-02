import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';

import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { formatMoney } from '@/utils';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const TokenPair: FC = () => {
  const { control } = useFormContext<PortfolioDetailsFormProps>();

  const tokenList = useWatch({
    control,
    name: 'tokenList',
  });

  return (
    <Div gap="0.5rem" display="flex" flexWrap="wrap" alignItems="center">
      {tokenList.length ? (
        <>
          <Div display="flex" alignItems="center" gap="0.55rem">
            <P
              display="flex"
              color="#FFFFFF"
              fontFamily="Inter"
              alignItems="center"
              lineHeight="2.25rem"
              fontSize={['1rem', '1.5rem']}
            >
              {formatMoney(0.256)} {tokenList[0].symbol}
            </P>
            <TokenIcon
              withBg
              url={tokenList[0].iconUri}
              symbol={tokenList[0].symbol}
              size="0.93rem"
              network={Network.MovementMainnet}
            />
          </Div>
          <Div
            width="4px"
            mx={['0.65rem', '0.65rem', '0.65rem', '2.25rem']}
            height="4px"
            bg="#FFFFFF"
            borderRadius="1000px"
          />
          <Div display="flex" alignItems="center" gap="0.55rem">
            <P
              display="flex"
              color="#FFFFFF"
              fontFamily="Inter"
              alignItems="center"
              lineHeight="2.25rem"
              fontSize={['1rem', '1.5rem']}
            >
              {formatMoney(0.256)} {tokenList[1].symbol}
            </P>
            <TokenIcon
              withBg
              url={tokenList[1].iconUri}
              symbol={tokenList[1].symbol}
              size="0.93rem"
              network={Network.MovementMainnet}
            />
          </Div>
        </>
      ) : (
        <Skeleton height={20} width={300} />
      )}
    </Div>
  );
};

export default TokenPair;
