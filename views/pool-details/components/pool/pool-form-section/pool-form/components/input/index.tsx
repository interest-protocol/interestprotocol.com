/* eslint-disable @typescript-eslint/no-explicit-any */
import { VolatilePool } from '@interest-protocol/interest-aptos-curve';
import { Div, P } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { ChangeEvent, FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { TextField } from '@/components/text-field';
import { FixedPointMath } from '@/lib';
import { parseInputEventToNumberString } from '@/utils';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';
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
  type = 'default',
  onSelectToken,
}) => {
  const { register, setValue, getValues } =
    useFormContext<PortfolioDetailsFormProps>();

  const { loading, pool } = usePoolDetailsContext();

  const tokenDecimals = useWatch({ name: `${field}.decimals` });
  const selectedIndex = Number(field.split('.').pop());

  const handleChange = (amount: string) => {
    if (loading || !pool) return;

    if (getValues('balanced')) {
      const index = field == 'tokenList.0' ? 0 : 1;
      const newIndex = +(index != 1);

      setValue(`tokenList.${index}.value`, amount);
      setValue(
        `tokenList.${index}.valueBN`,
        FixedPointMath.toBigNumber(
          amount,
          getValues(`tokenList.${index}.decimals`)
        )
      );

      if (pool.curve == 'stable') {
        const ratio = getValues('ratio');
        const tvl = getValues('tvl') || 0;

        setValue(
          `tokenList.${newIndex}.value`,
          `${parseFloat((+amount * (+tvl >= 100 ? ratio[index] : 1)).toFixed(6))}`
        );
        setValue(
          `tokenList.${newIndex}.valueBN`,
          FixedPointMath.toBigNumber(
            +amount * (+tvl >= 100 ? ratio[index] : 1),
            getValues(`tokenList.${newIndex}.decimals`)
          )
        );
      } else {
        const poolExtraData = pool.poolExtraData as unknown as VolatilePool;

        const priceRaw = poolExtraData?.prices[pool.tokensAddresses[1]];
        const price = priceRaw?.price
          ? FixedPointMath.toNumber(BigNumber(String(priceRaw?.price)), 18)
          : 0;

        const newAmount = String(
          (newIndex ? +amount / price : +amount * price).toFixed(4)
        );
        setValue(`tokenList.${newIndex}.value`, newAmount);
        setValue(
          `tokenList.${newIndex}.valueBN`,
          FixedPointMath.toBigNumber(
            newAmount,
            getValues(`tokenList.${newIndex}.decimals`)
          )
        );
      }
    } else {
      setValue(`${field}.value`, amount);
      setValue(
        `${field}.valueBN`,
        FixedPointMath.toBigNumber(amount, tokenDecimals || 0)
      );
    }
  };

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
                    handleChange(value);
                  },
                })}
              />
            </Div>
            <Div
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {type === 'radio' ? (
                <Div display="flex" gap="0.5rem" flexDirection="column">
                  {[0, 1].map((i) => (
                    <Div
                      key={v4()}
                      p="0.5rem"
                      height="2.5rem"
                      display="flex"
                      bg="#030712"
                      gap="0.5rem"
                      cursor="pointer"
                      alignItems="center"
                      borderRadius="9999rem"
                      border="1px solid #F3F4F633"
                      onClick={() => onSelectToken?.(i)}
                    >
                      <Div
                        width="1.25rem"
                        height="1.25rem"
                        cursor="pointer"
                        display="flex"
                        borderRadius="50%"
                        alignItems="center"
                        justifyContent="center"
                        border="2px solid #B4C5FF"
                        bg={selectedIndex === i ? '#B4C5FF' : 'transparent'}
                      >
                        {selectedIndex === i && (
                          <Div
                            width="0.625rem"
                            height="0.625rem"
                            bg="#FFFFFF"
                            borderRadius="50%"
                          />
                        )}
                      </Div>
                      <SelectedToken field={`tokenList.${i}`} Suffix={Suffix} />
                    </Div>
                  ))}
                </Div>
              ) : (
                <SelectedToken field={field} Suffix={Suffix} />
              )}
            </Div>
          </Div>
          <Div display="flex" justifyContent="space-between">
            <AmountInDollar field={field} />
            {!shortView ? (
              <Balance field={field} onHandleChange={handleChange} />
            ) : null}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Input;
