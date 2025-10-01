/* eslint-disable @typescript-eslint/no-explicit-any */
import { Div, P } from '@stylin.js/elements';
import { ChangeEvent, FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { TextField } from '@/components/text-field';
import { FixedPointMath } from '@/lib';
import { parseInputEventToNumberString } from '@/utils';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import Balance from './components/balance';
import AmountInDollar from './components/dollar-value';
import SelectedToken from './components/selected-token';
import { InputProps } from './input.types';
import InputManager from './input-manager';

const Input: FC<InputProps> = ({
  field,
  label,
  Suffix,
  readonly,
  shortView,
  onlyField,
}) => {
  const { register, setValue } = useFormContext<PortfolioDetailsFormProps>();

  const tokenDecimals = useWatch({ name: `${field}.decimals` });

  return (
    <>
      {!readonly && <InputManager name={field} />}
      <Div
        {...(onlyField
          ? {}
          : {
              p: '1rem',
              gap: '0.5rem',
              display: 'flex',
              bg: '#9CA3AF1A',
              flexDirection: 'column' as const,
              borderRadius: '0.75rem',
              boxShadow: ' 0px 0px 0px 1px #F3F4F61A',
            })}
      >
        {label && (
          <Div
            display="flex"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <P
              color="#9CA3AF"
              fontWeight="400"
              fontFamily="Inter"
              fontSize="0.868rem"
              lineHeight="1.25rem"
            >
              {label}
            </P>
          </Div>
        )}
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
                placeholder="0"
                fontWeight="400"
                lineHeight="3rem"
                fontFamily="Inter"
                readOnly={readonly}
                fontSize={['1.875rem', onlyField ? '1.5rem' : '2.25rem']}
                cursor={readonly ? 'not-allowed' : 'inherit'}
                nPlaceholder={{
                  color: '#6B7280',
                }}
                fieldProps={{
                  width: '100%',
                  border: 'none',
                  nHover: { border: 'none' },
                  color: '#fff',
                }}
                {...register(`${field}.value` as any, {
                  onChange: (v: ChangeEvent<HTMLInputElement>) => {
                    const value = parseInputEventToNumberString(v);
                    setValue(`${field}.value` as any, value, {
                      shouldDirty: true,
                    });
                    setValue(
                      `${field}.valueBN` as any,
                      FixedPointMath.toBigNumber(value, tokenDecimals || 0)
                    );
                  },
                })}
              />
            </Div>
            <Div display="flex" alignItems="center">
              <SelectedToken field={field} Suffix={Suffix} />
            </Div>
          </Div>
          <Div display="flex" justifyContent="space-between">
            <AmountInDollar field={field} />
            {!shortView ? <Balance field={field} /> : null}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Input;
