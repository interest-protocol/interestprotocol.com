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
      display="flex"
      alignItems="center"
      gap="0.5rem"
      justifyContent="space-between"
    >
      <P
        fontSize="1.5rem"
        fontFamily="Inter"
        display="flex"
        alignItems="center"
        gap="0.25rem"
        color="#FFFFFF"
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
      <Div width="4px" height="4px" bg="#FFFFFF" borderRadius="100px"></Div>
      <P
        fontSize="1.5rem"
        fontFamily="Inter"
        display="flex"
        alignItems="center"
        gap="0.25rem"
        color="#FFFFFF"
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
