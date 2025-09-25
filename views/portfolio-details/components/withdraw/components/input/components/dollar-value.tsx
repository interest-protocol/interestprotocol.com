import { P } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useCoinsPrice } from '@/hooks/use-coins-price';
import { formatDollars } from '@/utils';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const AmountInDollar: FC = () => {
  const { control } = useFormContext<PortfolioDetailsFormProps>();

  const value = useWatch({
    control,
    name: 'lpCoin.value',
  });

  const { data: prices } = useCoinsPrice('USD');

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
