import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import Input from '../components/input';

const WithdrawReceive: FC = () => {
  const { control, setValue } = useFormContext<PortfolioDetailsFormProps>();
  const selectedCoinIndex = useWatch({ control, name: 'selectedCoinIndex' });

  const field =
    selectedCoinIndex.length > 0
      ? (`tokenList.${selectedCoinIndex[0]}` as const)
      : ('tokenList.0' as const);

  return (
    <Input
      readonly
      type="radio"
      shortView
      label="You pay"
      field={field}
      onSelectToken={(index) => setValue('selectedCoinIndex', [index])}
    />
  );
};

export default WithdrawReceive;
