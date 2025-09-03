import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';

import { TransactionTypeProps } from './transaction-type.types';

const TransactionType: FC<TransactionTypeProps> = ({
  category,
  tokenIn,
  tokenOut,
}) => (
  <Div
    display="flex"
    alignItems="center"
    gap="0.5rem"
    color="#FFFFFF80"
    fontWeight="500"
    fontFamily="Inter"
    fontSize="0.875rem"
    lineHeight="1.12rem"
  >
    <Span textTransform="capitalize">{category}</Span>
    <TokenIcon
      withBg
      size="13px"
      symbol={tokenIn}
      rounded={true}
      network={Network.MovementMainnet}
    />
    <Span color="#fff">{tokenIn}</Span>
    <Span>and</Span>
    <TokenIcon
      withBg
      size="13px"
      symbol={tokenOut}
      rounded={true}
      network={Network.MovementMainnet}
    />
    <Span color="#fff">{tokenOut}</Span>
  </Div>
);

export default TransactionType;
