import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import Input from '../components/input';

const WithdrawReceive: FC = () => {
  const { control, setValue } = useFormContext<PortfolioDetailsFormProps>();
  const selectedCoinIndex = useWatch({ control, name: 'selectedCoinIndex' });

  return (
    <Div
      gap="1rem"
      display="flex"
      flexDirection="column"
      borderRadius="0.75rem"
    >
      <Input
        type="radio"
        shortView
        label="You pay"
        field={`tokenList.${selectedCoinIndex?.[0] || 0}`}
        onSelectToken={(index) => setValue('selectedCoinIndex', [index])}
      />
    </Div>
  );
};

export default WithdrawReceive;
