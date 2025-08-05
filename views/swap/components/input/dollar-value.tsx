import { Box, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
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
    <Box display="flex" gap="s" alignItems="center" flexWrap="wrap">
      <Typography size="small" fontSize="s" variant="body" color="#D1D5DB">
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
      </Typography>
      {label == 'to' && <PriceImpact />}
    </Box>
  );
};

export default AmountInDollar;
