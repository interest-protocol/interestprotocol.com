import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';

const PoolTokenInfoDesktop: FC = () => (
  <Div
    gap="1rem"
    alignItems="center"
    display={['none', 'none', 'none', 'flex']}
  >
    <TokenIcon
      withBg
      size="1.52rem"
      network={Network.MovementMainnet}
      symbol="MOVE"
    />
    <P
      fontWeight="600"
      color="#E5E7EB"
      fontFamily="Inter"
      fontSize="1.75rem"
      lineHeight="2.8125rem"
    >
      MOVE-MOVE
    </P>
  </Div>
);

export default PoolTokenInfoDesktop;
