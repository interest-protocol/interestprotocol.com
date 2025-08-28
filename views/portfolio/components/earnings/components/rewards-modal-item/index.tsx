import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { formatMoney } from '@/utils/string';

import { RewardsModalItemProps } from './rewards-modal-item.types';

const RewardsModalItem: FC<RewardsModalItemProps> = ({
  url,
  symbol,
  value,
}) => (
  <Div
    mb="0.5rem"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
  >
    <P color="#FFFFFF" fontWeight="500" fontFamily="Inter" fontSize="1.25rem">
      {formatMoney(value)}
    </P>
    <Div gap="0.5rem" display="flex" alignItems="center">
      <Span
        color="#9CA3AF"
        fontWeight="500"
        fontFamily="Inter"
        fontSize="1.125rem"
      >
        {symbol}
      </Span>

      <TokenIcon
        withBg
        url={url}
        rounded
        symbol={symbol}
        size="0.906rem"
        network={Network.MovementMainnet}
      />
    </Div>
  </Div>
);
export default RewardsModalItem;
