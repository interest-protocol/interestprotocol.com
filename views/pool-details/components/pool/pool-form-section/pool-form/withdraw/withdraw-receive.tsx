import { Div, Hr } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { ToggleButton } from '@/components/toggle';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import Input from '../components/input';

const WithdrawReceive: FC = () => {
  const { control, setValue } = useFormContext<PortfolioDetailsFormProps>();

  const selectedCoinIndex = useWatch({ control, name: 'selectedCoinIndex' });

  const toggleSelectedCoinIndex = (index: number) => () => {
    const uniqueIndexes = new Set(selectedCoinIndex ?? []);

    uniqueIndexes.has(index)
      ? uniqueIndexes.delete(index)
      : uniqueIndexes.add(index);

    setValue('selectedCoinIndex', Array.from(uniqueIndexes.values()));
  };

  return (
    <Div
      p="1rem"
      gap="1rem"
      display="flex"
      bg="#9CA3AF1A"
      flexDirection="column"
      borderRadius="0.75rem"
      boxShadow=" 0px 0px 0px 1px #F3F4F61A"
      pt={['1.5rem', '1.5rem', '1.5rem', '1rem']}
    >
      <Input
        readonly
        shortView
        onlyField
        field="tokenList.0"
        Suffix={
          <ToggleButton
            name="selectedCoin0"
            onClick={toggleSelectedCoinIndex(0)}
            defaultValue={selectedCoinIndex?.includes(0)}
          />
        }
      />
      <Hr border="1px solid #F3F4F61A" />
      <Input
        readonly
        shortView
        onlyField
        field="tokenList.1"
        Suffix={
          <ToggleButton
            name="selectedCoin1"
            onClick={toggleSelectedCoinIndex(1)}
            defaultValue={selectedCoinIndex?.includes(1)}
          />
        }
      />
    </Div>
  );
};

export default WithdrawReceive;
