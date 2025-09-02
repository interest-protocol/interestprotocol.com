import { Div } from '@stylin.js/elements';
import { ChangeEvent, FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { TextField } from '@/components/text-field';
import { FixedPointMath } from '@/lib';
import { parseInputEventToNumberString } from '@/utils';
import {
  CreatePoolForm,
  InputProps,
} from '@/views/pool-create/pool-create.types';

import Balance from './components/balance';
import AmountInDollar from './components/dollar-value';
import HeaderInfo from './components/header-info';
import SelectToken from './components/select-token';

const Input: FC<InputProps> = ({ index }) => {
  const { register, setValue, control } = useFormContext<CreatePoolForm>();

  const error = useWatch({ control, name: 'error' });
  const tokenType = useWatch({ control, name: `tokens.${index}.type` });
  const tokenDecimals = useWatch({ control, name: `tokens.${index}.decimals` });

  return (
    <Div
      p="1rem"
      gap="0.5rem"
      display="flex"
      flexDirection="column"
      borderRadius="0.75rem"
      bg={error ? '#EF44441A' : '#9CA3AF1A'}
      border={error ? '1px solid #EF44441A' : undefined}
    >
      <HeaderInfo index={index} />
      <Div
        gap="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Div
          gap="0.5rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Div
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <TextField
              ml="-1rem"
              width="100%"
              status="none"
              placeholder="0"
              fontWeight="400"
              lineHeight="3rem"
              fontFamily="Inter"
              disabled={!tokenType}
              fontSize={['2rem', '2.25rem']}
              fieldProps={{
                width: '100%',
                border: 'none',
                nHover: { border: 'none' },
                color: '#FFFFFF',
              }}
              {...register(`tokens.${index}.value`, {
                onChange: (v: ChangeEvent<HTMLInputElement>) => {
                  const value = parseInputEventToNumberString(v);
                  setValue(`tokens.${index}.value`, value, {
                    shouldDirty: true,
                  });
                  setValue(
                    `tokens.${index}.valueBN`,
                    FixedPointMath.toBigNumber(value, tokenDecimals || 0)
                  );
                },
              })}
            />
          </Div>
          <SelectToken index={index} />
        </Div>

        <Div display="flex" justifyContent="space-between" alignItems="center">
          <AmountInDollar index={index} />
          <Balance index={index} />
        </Div>
      </Div>
    </Div>
  );
};

export default Input;
