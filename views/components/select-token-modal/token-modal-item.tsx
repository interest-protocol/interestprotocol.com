import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { useCoinsPrice } from '@/hooks/use-coins-price';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { formatDollars, formatMoney, ZERO_BIG_NUMBER } from '@/utils';

import { TokenModalItemProps } from './select-token-modal.types';

const TokenModalItem: FC<TokenModalItemProps> = ({
  isFA,
  token,
  onClick,
  selected,
}) => {
  const { coinsMap } = useCoins();
  const [isLoading, setLoading] = useState(false);

  const { data: price } = useCoinsPrice(token.type);

  const coin = coinsMap[normalizeSuiAddress(token.type)];

  const balance = FixedPointMath.toNumber(
    coin?.balance ?? ZERO_BIG_NUMBER,
    coin?.decimals ?? token.decimals
  );

  const onSelect = () => {
    if (selected) return;
    onClick();
    setLoading(true);
  };

  return (
    <Div
      p="12px"
      display="flex"
      color="textSoft"
      cursor="pointer"
      borderRadius="0.5rem"
      onClick={onSelect}
      alignItems="center"
      position="relative"
      justifyContent="space-between"
      transition="background 500ms ease-in-out"
      nHover={{ borderColor: '#B4C5FF4D', bg: '#B4C5FF33' }}
    >
      {isLoading && (
        <Div position="absolute" top="0" right="0" left="0" bottom="0">
          <Skeleton height="100%" />
        </Div>
      )}
      <Div display="flex" alignItems="center" gap="0.75rem">
        <TokenIcon
          withBg
          url={token.iconUri}
          size="1.52rem"
          rounded={!isFA}
          symbol={token.symbol}
          network={Network.MovementMainnet}
        />
        <Div display="flex" flexDirection="column">
          <P
            color="#E5E7EB"
            fontWeight="500"
            overflow="hidden"
            fontFamily="Inter"
            whiteSpace="nowrap"
            fontSize="0.875rem"
            lineHeight="1.25rem"
            textOverflow="ellipsis"
          >
            {token.symbol}
          </P>
          <P
            color="#9CA3AF"
            fontWeight="400"
            overflow="hidden"
            fontFamily="Inter"
            whiteSpace="nowrap"
            fontSize="0.8rem"
            lineHeight="1.25rem"
            textOverflow="ellipsis"
          >
            {isFA ? 'Fungible Asset' : 'Coin'}
          </P>
        </Div>
      </Div>
      <Div display="flex" alignItems="flex-end" flexDirection="column">
        <P
          color="#E5E7EB"
          fontWeight="500"
          overflow="hidden"
          fontFamily="Inter"
          whiteSpace="nowrap"
          fontSize="0.875rem"
          lineHeight="1.25rem"
          textOverflow="ellipsis"
        >
          {formatMoney(balance, 2)}
        </P>
        <P
          color="#9CA3AF"
          fontWeight="400"
          fontFamily="Inter"
          whiteSpace="nowrap"
          fontSize="0.875rem"
          lineHeight="1.25rem"
        >
          {price?.length && price[0].price
            ? formatDollars(
                +BigNumber(balance)
                  .times(BigNumber(price[0].price))
                  .toNumber()
                  .toFixed(3)
              )
            : '--'}
        </P>
      </Div>
    </Div>
  );
};

export default TokenModalItem;
