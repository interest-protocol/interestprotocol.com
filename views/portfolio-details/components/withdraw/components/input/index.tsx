import { Div } from '@stylin.js/elements';
import { ChangeEvent, FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { TextField } from '@/components/text-field';
import { parseInputEventToNumberString } from '@/utils';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import Balance from './components/balance';
import AmountInDollar from './components/dollar-value';
import HeaderInfo from './components/header-info';

const Input: FC = () => {
  const { register, setValue } = useFormContext<PortfolioDetailsFormProps>();

  return (
    <Div
      p="1rem"
      mb="0.75rem"
      gap="0.5rem"
      display="flex"
      bg="#9CA3AF1A"
      height="8.25rem"
      flexDirection="column"
      borderRadius="0.75rem"
    >
      <HeaderInfo />

      <Div
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <TextField
          ml="-1rem"
          width="100%"
          placeholder="0"
          lineHeight="3rem"
          fontFamily="Inter"
          fontWeight="400"
          fontSize={['2rem', '2.25rem']}
          nPlaceholder={{
            color: '#6B7280',
          }}
          fieldProps={{
            width: '100%',
            border: 'none',
            nHover: { border: 'none' },
            color: '#FFFFFF',
          }}
          {...register('lpCoin.value', {
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              const raw = e.target.value.replace('%', '');
              const v = parseInputEventToNumberString({
                ...e,
                target: { ...e.target, value: raw },
              });
              setValue('lpCoin.value', v, { shouldDirty: true });
            },
          })}
        />
      </Div>

      <Div display="flex" justifyContent="space-between" color="outline">
        <AmountInDollar />
        <Balance />
      </Div>
    </Div>
  );
};

export default Input;
