import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import Tag from '@/components/tag';
import { Network } from '@/constants';

const PoolTokenInfoMobile: FC = () => (
  <Div
    justifyContent="space-between"
    display={['flex', 'flex', 'flex', 'none']}
  >
    <Div gap="0.5rem" display="flex" alignItems="center">
      <TokenIcon
        withBg
        symbol="MOVE"
        size="1rem"
        network={Network.MovementMainnet}
      />
      <P
        fontWeight="600"
        color="#E5E7EB"
        fontFamily="Inter"
        fontSize="1.25rem"
        lineHeight="1.875rem"
      >
        MOVE-MOVE
      </P>
    </Div>
    <Div display="flex" gap="0.5rem" alignItems="center">
      <P
        fontWeight="500"
        color="#949E9E"
        fontSize="0.875rem"
        lineHeight="1.25rem"
      >
        APR
      </P>
      <Tag label="29.17%" type="success" />
    </Div>
  </Div>
);

export default PoolTokenInfoMobile;
