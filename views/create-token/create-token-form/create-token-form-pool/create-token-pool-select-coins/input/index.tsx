import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div } from '@stylin.js/elements';
import { ChangeEvent, FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { TextField } from '@/components/text-field';
import { MOVE } from '@/constants/coins';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { parseInputEventToNumberString, ZERO_BIG_NUMBER } from '@/utils';
import { ICreateTokenForm } from '@/views/create-token/create-token.types';

import AmountInDollar from './dollar-value';
import { InputProps } from './input.types';
import QuoteBalance from './quote-balance';
import SelectToken from './select-token';
import TokenBalance from './token-balance';

const Input: FC<InputProps> = ({ label }) => {
  const { coinsMap } = useCoins();
  const { register, setValue, getValues } = useFormContext<ICreateTokenForm>();

  const type = MOVE.address.toString();
  const balance =
    label == 'quote'
      ? FixedPointMath.toNumber(
          coinsMap[normalizeSuiAddress(type)]?.balance ?? ZERO_BIG_NUMBER
        )
      : getValues('supply');

  const rawValue = getValues(`pool.${label}Value`);
  const isEmpty = !rawValue || isNaN(+rawValue) || +rawValue <= 0;

  return (
    <Div
      gap="1rem"
      px="1rem"
      py="1.5rem"
      width="100%"
      bg="#9CA3AF1A"
      display="flex"
      height="5.75rem"
      alignItems="center"
      borderRadius="0.75rem"
      border="1px solid #F3F4F61A"
      justifyContent="space-between"
    >
      <Div
        gap="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
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
              lineHeight="1.75rem"
              placeholder="0"
              fontFamily="Inter"
              fontWeight="400"
              fontSize={['1.375rem', '2.25rem']}
              opacity={isEmpty ? 0.4 : undefined}
              fieldProps={{
                width: '100%',
                border: 'none',
                nHover: {
                  border: 'none',
                },
                color: isEmpty ? '#6B7280' : '#FFFFFF',
              }}
              {...register(`pool.${label}Value`, {
                onChange: (v: ChangeEvent<HTMLInputElement>) => {
                  const value = parseInputEventToNumberString(v);
                  const amount = +value > balance ? balance : value;
                  setValue?.(`pool.${label}Value`, String(amount));
                  setValue?.(
                    `pool.${label}ValueBN`,
                    FixedPointMath.toBigNumber(
                      amount,
                      label === 'quote' ? 8 : getValues('decimals')
                    )
                  );
                },
              })}
            />
          </Div>
          <SelectToken label={label} />
        </Div>
        {/* account?.address */}
        {true && (
          <Div display="flex" justifyContent="space-between" color="#909094">
            <AmountInDollar label={label} />
            {label == 'token' ? <TokenBalance /> : <QuoteBalance />}
          </Div>
        )}
      </Div>
    </Div>
  );
};

export default Input;
