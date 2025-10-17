import { Div } from '@stylin.js/elements';
import { ChangeEvent, FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { TextField } from '@/components/text-field';
import { FixedPointMath } from '@/lib';
import { parseInputEventToNumberString } from '@/utils';

import Balance from './balance';
import AmountInDollar from './dollar-value';
import HeaderInfo from './header-info';
import { InputProps } from './input.types';
import SelectToken from './select-token';

const InputSwap: FC<InputProps> = ({ label }) => {
  const { register, setValue, getValues, control } = useFormContext();

  useWatch({ control, name: 'focus' });

  const swapping = useWatch({ control, name: 'swapping' });

  const rawValue = useWatch({ control, name: `${label}.value` });

  const isEmpty = !rawValue || isNaN(+rawValue) || +rawValue <= 0;

  return (
    <>
      <HeaderInfo label={label} />
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
              lineHeight="1.25rem"
              placeholder="0"
              fontFamily="Inter"
              fontWeight="400"
              fontSize={['2rem', '2.25rem']}
              disabled={label === 'to' || swapping}
              opacity={isEmpty ? 0.4 : undefined}
              fieldProps={{
                width: '100%',
                border: 'none',
                nHover: {
                  border: 'none',
                },
                color: isEmpty ? '#6B7280' : '#FFFFFF',
              }}
              {...register(
                `${label}.value`,
                label === 'to'
                  ? {}
                  : {
                      onChange: (v: ChangeEvent<HTMLInputElement>) => {
                        setValue('slider', {});
                        setValue('origin', label);
                        const value = parseInputEventToNumberString(v);
                        setValue('lock', false);
                        setValue?.(`${label}.value`, value);
                        setValue?.(
                          `${label}.valueBN`,
                          FixedPointMath.toBigNumber(
                            value,
                            getValues(`${label}.decimals`)
                          )
                        );
                      },
                    }
              )}
            />
          </Div>
          <SelectToken label={label} />
        </Div>
        <Div display="flex" justifyContent="space-between">
          <AmountInDollar label={label} />
          <Balance label={label} />
        </Div>
      </Div>
    </>
  );
};

export default InputSwap;
