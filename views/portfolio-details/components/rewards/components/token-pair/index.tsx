import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { formatMoney } from '@/utils';

import { TokenPairProps } from './token-pair.types';

const TokenPair: FC<TokenPairProps> = ({ left, right }) => {
  return (
    <Div
      gap="0.5rem"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
    >
      <Div display="flex" alignItems="center" gap="0.55rem">
        <P
          display="flex"
          color="#FFFFFF"
          fontFamily="Inter"
          alignItems="center"
          lineHeight="2.25rem"
          fontSize={['1rem', '1.5rem']}
        >
          {formatMoney(left.value)} {left.symbol}
        </P>
        <TokenIcon
          withBg
          size="0.93rem"
          url={left.iconUrl}
          symbol={left.symbol}
          network={Network.MovementMainnet}
        />
      </Div>
      <Div width="4px" height="4px" bg="#FFFFFF" borderRadius="1000px" />
      <Div display="flex" alignItems="center" gap="0.55rem">
        <P
          display="flex"
          color="#FFFFFF"
          fontFamily="Inter"
          alignItems="center"
          lineHeight="2.25rem"
          fontSize={['1rem', '1.5rem']}
        >
          {formatMoney(right.value)} {right.symbol}
        </P>
        <TokenIcon
          withBg
          size="0.93rem"
          url={right.iconUrl}
          symbol={right.symbol}
          network={Network.MovementMainnet}
        />
      </Div>
    </Div>
  );
};

export default TokenPair;
