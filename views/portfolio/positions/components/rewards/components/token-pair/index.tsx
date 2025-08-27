import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import TokenIcon from '@/components/token-icon';
import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';

import { TokenPairProps } from './token-pair.types';

const TokenPair: FC<TokenPairProps> = ({ left, right }) => {
  const network = useNetwork<Network>();

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
        {left.value} {left.symbol}
        <TokenIcon
          network={network}
          url={left.iconUrl}
          symbol={left.symbol}
          size="1rem"
          rounded
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
        {right.value} {right.symbol}
        <TokenIcon
          network={network}
          url={right.iconUrl}
          symbol={right.symbol}
          size="1rem"
          rounded
        />
      </P>
    </Div>
  );
};

export default TokenPair;
