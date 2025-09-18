import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { ChevronDoubleLeftSVG } from '@/components/svg';
import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { TokenStandard } from '@/lib/coins-manager/coins-manager.types';
import { formatMoney } from '@/utils';

import { SuccessModalTokenCardProps } from './success-modal.types';

const SuccessModalTokenCard: FC<SuccessModalTokenCardProps> = ({
  to,
  from,
  withoutAmount,
}) => (
  <Div
    py="m"
    px="s"
    gap="s"
    bg="surface"
    display="flex"
    borderRadius="xs"
    justifyContent="center"
  >
    <Div display="flex" alignItems="center">
      <TokenIcon
        withBg
        size="1rem"
        network={Network.MovementMainnet}
        symbol={from.symbol}
        rounded={from.standard === TokenStandard.COIN}
      />
      <P
        alignItems="center"
        textAlign="center"
        color="onSurface"
        display="flex"
        ml="s"
      >
        {`${!withoutAmount ? formatMoney(+from?.value) : ''} ${from.symbol}`}
      </P>
    </Div>
    <Div display="flex" alignItems="center" color="onSurface">
      <ChevronDoubleLeftSVG
        maxHeight="0.75rem"
        maxWidth="0.75rem"
        width="100%"
      />
    </Div>
    <Div display="flex" alignItems="center">
      <TokenIcon
        withBg
        size="1.1rem"
        symbol={to.symbol}
        network={Network.MovementMainnet}
        rounded={to.standard === TokenStandard.COIN}
      />
      <P
        alignItems="center"
        textAlign="center"
        color="onSurface"
        display="flex"
        ml="s"
      >
        {`${!withoutAmount ? formatMoney(+to?.value) : ''} ${to.symbol}`}
      </P>
    </Div>
  </Div>
);

export default SuccessModalTokenCard;
