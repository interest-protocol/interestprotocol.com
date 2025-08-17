import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useCoinsPrice } from '@/hooks/use-coins-price';
import { P } from '@stylin.js/elements';

const PriceImpact: FC = () => {
  const { control } = useFormContext();

  const [toValue, fromValue, toType, fromType] = useWatch({
    control,
    name: ['to.type', 'from.type', 'to.value', 'from.value'],
  });

  const { data: prices } = useCoinsPrice([toType, fromType]);

  const { toUSDPrice, fromUSDPrice } = {
    toUSDPrice: prices?.find(({ coin }) => coin === toType)?.price,
    fromUSDPrice: prices?.find(({ coin }) => coin === fromType)?.price,
  };

  const toUSD = toUSDPrice ? +toValue * toUSDPrice : null;
  const fromUSD = fromUSDPrice ? +fromValue * fromUSDPrice : null;
  const differenceBetween = fromUSD && toUSD ? fromUSD - toUSD : null;
  const priceImpact =
    differenceBetween && fromUSD ? (differenceBetween * 100) / fromUSD : null;

  if (!priceImpact) return null;

  const STATUS =
    priceImpact < 1 ? 'success' : priceImpact < 5 ? 'warning' : 'error';

  return (
    <P
      px="xs"
      py="2xs"
      bg={STATUS}
      fontSize="s"
      borderRadius="full"
      color="lowestContainer"
    >
      {priceImpact
        ? `${priceImpact > 0.1 ? priceImpact.toFixed(2) : '< 0.1'}%`
        : '--'}
    </P>
  );
};

export default PriceImpact;
