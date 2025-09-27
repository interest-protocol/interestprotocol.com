import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { formatMoney } from '@/utils';

const TokenPair: FC = () => {
  return (
    <Div gap="0.5rem" display="flex" flexWrap="wrap" alignItems="center">
      <Div display="flex" alignItems="center" gap="0.55rem">
        <P
          display="flex"
          color="#FFFFFF"
          fontFamily="Inter"
          alignItems="center"
          lineHeight="2.25rem"
          fontSize={['1rem', '1.5rem']}
        >
          {formatMoney(0.256)} MOVE
        </P>
        <TokenIcon
          withBg
          symbol="MOVE"
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
          {formatMoney(0.256)} MOVE
        </P>
        <TokenIcon
          withBg
          symbol="MOVE"
          size="0.93rem"
          network={Network.MovementMainnet}
        />
      </Div>
    </Div>
  );
};

export default TokenPair;
