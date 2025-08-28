import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import TokenIcon from '@/components/token-icon';
import { formatMoney } from '@/utils';

import { TokenPairProps } from './token-pair.types';

const TokenPair: FC<TokenPairProps> = ({ left, right }) => {
  return (
    <Div
      gap="0.5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <P
        gap="0.55rem"
        display="flex"
        color="#FFFFFF"
        fontSize="1.5rem"
        fontFamily="Inter"
        alignItems="center"
      >
        {formatMoney(left.value)} {left.symbol}
        <TokenIcon
          withBg
          rounded
          size="1rem"
          url={left.iconUrl}
          symbol={left.symbol}
          network={Network.MovementMainnet}
        />
      </P>
      <Div width="4px" height="4px" bg="#FFFFFF" borderRadius="1000px"></Div>
      <P
        gap="0.5rem"
        display="flex"
        color="#FFFFFF"
        fontSize="1.5rem"
        fontFamily="Inter"
        alignItems="center"
      >
        {formatMoney(right.value)} {right.symbol}
        <TokenIcon
          withBg
          rounded
          size="1rem"
          url={right.iconUrl}
          symbol={right.symbol}
          network={Network.MovementMainnet}
        />
      </P>
    </Div>
  );
};

export default TokenPair;
