import { Div, P } from '@stylin.js/elements';
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
    <Div display="flex" gap="1rem" alignItems="center" flexWrap="wrap">
      <P fontSize="0.75rem" color="#D1D5DB">
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
    </Div>
  );
};

export default AmountInDollar;
