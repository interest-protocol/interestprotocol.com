import { Div, P } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC, useMemo } from 'react';
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

  const dollarValue = useMemo(() => {
    if (!prices?.length || !value) return 0;

    return BigNumber(value).times(prices[0].price).toNumber();
  }, [prices, value]);

  return (
    <Div display="flex" gap="0.75rem" alignItems="center" flexWrap="wrap">
      <P fontSize="0.75rem" color="#D1D5DB" fontWeight="400">
        {formatDollars(dollarValue, 6, 'start')}
      </P>
      {label === 'to' && <PriceImpact />}
    </Div>
  );
};

export default AmountInDollar;
