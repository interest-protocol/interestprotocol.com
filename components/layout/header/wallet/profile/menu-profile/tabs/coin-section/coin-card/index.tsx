import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/button';
import { WrapSVG } from '@/components/svg';
import { toasting } from '@/components/toast';
import TokenIcon from '@/components/token-icon';
import { TooltipWrapper } from '@/components/tooltip';
import { Network } from '@/constants';
import { COIN_TYPE_TO_FA } from '@/constants/coins';
import { useCoinsPrice } from '@/hooks/use-coins-price';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { TokenStandard } from '@/lib/coins-manager/coins-manager.types';
import { formatDollars, formatMoney, ZERO_BIG_NUMBER } from '@/utils';

import { CoinCardProps } from '../../../user-info.types';
import CardWrapper from './card-wrapper';

type CoinType = keyof typeof COIN_TYPE_TO_FA;

const CoinCard: FC<CoinCardProps> = ({ token }) => {
  const symbol = token.symbol;
  const { coinsMap } = useCoins();
  const decimals = token.decimals;

  const { data } = useCoinsPrice([token.type]);

  const { price, priceChange24HoursPercentage } = data?.[0] ?? {};

  const coin = coinsMap[normalizeSuiAddress(token.type)];

  const balance = FixedPointMath.toNumber(
    coin?.balance ?? ZERO_BIG_NUMBER,
    coin?.decimals ?? decimals
  );
  const handleWrapCoin = async () => {
    const dismiss = toasting.loading({ message: `Wrapping ${symbol}...` });
    try {
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 4000 + 1000)
      );

      dismiss();
      if (Math.random() > 0.5) {
        toasting.success({
          action: 'Wrap',
          message: 'See on explorer',
          link: '#',
        });
      } else throw new Error();
    } catch (e) {
      dismiss();
      toasting.error({
        action: 'Wrap',
        message: (e as Error).message ?? 'Error executing transaction',
      });
    } finally {
      dismiss();
    }
  };

  const isConvertible = (token.type as CoinType) in COIN_TYPE_TO_FA;

  if ((!coin || coin.balance.isZero()) && isConvertible) return;

  return (
    <CardWrapper
      symbol={symbol}
      supportingText={formatDollars(price ?? 0, 2)}
      TokenIcon={
        <TokenIcon
          withBg
          size="1.25rem"
          symbol={symbol}
          url={token.iconUri}
          network={Network.MovementMainnet}
          rounded={token.standard === TokenStandard.COIN}
        />
      }
    >
      <Div display="flex" gap="0.5rem">
        {isConvertible && (
          <TooltipWrapper
            tooltipContent={
              <P
                color="#fff"
                p="0.5rem"
                bg="#030712"
                fontSize="0.75rem"
                fontFamily="Inter"
                borderRadius="0.5rem"
                whiteSpace="nowrap"
              >
                Convert to FA
              </P>
            }
          >
            <Button
              p="0.5rem"
              mr="unset"
              variant="text"
              color="#B4C5FF"
              borderRadius="999px"
              borderColor=" #B4C5FF"
              onClick={handleWrapCoin}
              border="1px solid #B4C5FF"
            >
              <WrapSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
            </Button>
          </TooltipWrapper>
        )}
        <Div display="flex" gap="0.5rem" alignItems="center">
          <Div
            display="flex"
            alignItems="flex-end"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <P
              mb="0.125rem"
              lineHeight="1rem"
              fontSize="0.875rem"
              fontWeight="500"
              fontFamily="Inter"
              color="#fff"
            >
              {formatMoney(balance, 4)}
              <Span fontSize="Inter" ml="0.25rem">
                {symbol}
              </Span>
            </P>
            <Div
              mt="0.15rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #9CA3AF1A"
              px="0.5rem"
              borderRadius="999px"
              bg={
                ['#16A24A33', '#E53E3E33'][
                  Number((priceChange24HoursPercentage ?? 0) < 0)
                ]
              }
              color={
                ['#5CD187', '#FF8181'][
                  Number((priceChange24HoursPercentage ?? 0) < 0)
                ]
              }
            >
              <P
                fontSize="0.625rem"
                lineHeight="1rem"
                fontWeight="500"
                fontFamily="Inter"
              >
                {`${!priceChange24HoursPercentage ? '' : priceChange24HoursPercentage >= 0 ? '+' : ''}${+(priceChange24HoursPercentage ?? 0).toFixed(2)}%`}
              </P>
            </Div>
          </Div>
        </Div>
      </Div>
    </CardWrapper>
  );
};

export default CoinCard;
