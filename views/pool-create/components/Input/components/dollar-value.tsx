import { Box, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useCoinsPrice } from '@/hooks/use-coins-price';
import { formatDollars } from '@/utils';

import { CreatePoolForm } from '../../../pool-create.types';
import { InputProps } from '../input.types';

const AmountInDollar: FC<InputProps> = ({ index }) => {
  const { control } = useFormContext<CreatePoolForm>();

  const [type, value] = useWatch({
    control,
    name: [`tokens.${index}.type`, `tokens.${index}.value`],
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
    </Box>
  );
};

export default AmountInDollar;
