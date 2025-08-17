import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import BigNumber from 'bignumber.js';
import { useFormContext, useWatch } from 'react-hook-form';

import { useCoinsPrice } from '@/hooks/use-coins-price';
import { formatDollars } from '@/utils';

import { InputProps } from './input.types';
import PriceImpact from './price-impact';

const AmountInDollar: FC<InputProps> = ({ label }) => {
  const { control } = useFormContext();

  const [type, value] = useWatch({
    control,
    name: [`${label}.type`, `${label}.value`],
  });

  const { data: prices } = useCoinsPrice(type);

  if (!(prices?.length && value)) return '$0';

  return (
    <Div display="flex" gap="s" alignItems="center" flexWrap="wrap">
      <P fontSize="s" color="#D1D5DB">
        {prices && value
          ? formatDollars(
            +BigNumber(value)
              .times(BigNumber(prices[0].price))
              .toNumber()
              .toFixed(2),
            6,
            'start'
          )
          : '0'}{' '}
      </P>
      {label == 'to' && <PriceImpact />}
    </Div>
  );
};

export default AmountInDollar;
