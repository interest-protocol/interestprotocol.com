import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { formatMoney } from '@/utils/string';

import { RewardsModalItemProps } from './rewards-modal-item.types';

const RewardsModalItem: FC<RewardsModalItemProps> = ({ symbol, amount }) => (
  <Div display="flex" justifyContent="space-between" alignItems="center">
    <P
      color="#FFFFFF"
      fontWeight="500"
      fontFamily="Inter"
      fontSize="1.25rem"
      lineHeight="2.25rem"
    >
      {formatMoney(+amount)}
    </P>
    <Div gap="0.5rem" display="flex" alignItems="center">
      <Span
        color="#9CA3AF"
        fontWeight="500"
        fontFamily="Inter"
        fontSize="1.125rem"
        lineHeight="2.25rem"
      >
        {symbol}
      </Span>
      <TokenIcon
        withBg
        symbol={symbol}
        size="0.906rem"
        network={Network.MovementMainnet}
      />
    </Div>
  </Div>
);

export default RewardsModalItem;
