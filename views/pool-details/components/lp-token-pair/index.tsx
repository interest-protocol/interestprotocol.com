import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';

import { LpTokenPairProps } from './lp-token-pair';

const LpTokenPair: FC<LpTokenPairProps> = ({ lp, tokenPair }) => (
  <Div gap="1rem" display="flex" alignItems="center">
    <TokenIcon
      withBg
      rounded
      size="1rem"
      url={lp}
      symbol="MOVE"
      network={Network.MovementMainnet}
    />
    <P
      color="#E5E7EB"
      fontWeight="600"
      fontFamily="Inter"
      fontSize="1.75rem"
      lineHeight="2.8125rem"
    >
      {tokenPair[0]} - {tokenPair[1]}
    </P>
  </Div>
);
export default LpTokenPair;
