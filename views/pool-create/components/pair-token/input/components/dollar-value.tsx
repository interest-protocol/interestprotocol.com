import { P } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useCoinsPrice } from '@/hooks/use-coins-price';
import { formatDollars } from '@/utils';

import { CreatePoolForm, InputProps } from '../../../../pool-create.types';

const AmountInDollar: FC<InputProps> = ({ index }) => {
  const { control } = useFormContext<CreatePoolForm>();

  const [type, value] = useWatch({
    control,
    name: [`tokens.${index}.type`, `tokens.${index}.value`],
  });
  const { data: prices } = useCoinsPrice(type);

  const amount =
    prices?.length && value
      ? formatDollars(
          +BigNumber(value)
            .times(BigNumber(prices[0].price))
            .toNumber()
            .toFixed(2),
          6,
          'start'
        )
      : '$0';

  return (
    <P fontSize="0.75rem" fontWeight="400" color="#9CA3AF">
      {amount}
    </P>
  );
};

export default AmountInDollar;
