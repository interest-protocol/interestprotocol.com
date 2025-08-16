import { Box, TextField } from '@interest-protocol/ui-kit';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import { ChangeEvent, FC } from 'react';
import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { FixedPointMath } from '@/lib';
import { parseInputEventToNumberString } from '@/utils';
import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

import Balance from './components/balance';
import AmountInDollar from './components/dollar-value';
import HeaderInfo from './components/header-info';
import SelectToken from './components/select-token';
import { InputProps } from './input.types';

const Input: FC<InputProps> = ({ index }) => {
  const { register, setValue, getValues } = useFormContext<CreatePoolForm>();
  const { account } = useAptosWallet();

  const tokenType = useWatch({ name: `tokens.${index}.type` });
  const tokenDecimals = useWatch({ name: `tokens.${index}.decimals` });
  const error = useWatch({ name: 'error' });

  const rawValue = getValues(`tokens.${index}.value`);
  const isEmpty = !rawValue || isNaN(+rawValue) || +rawValue <= 0;

  return (
    <Box
      p="1rem"
      gap="0.5rem"
      display="flex"
      height="6.375rem"
      flexDirection="column"
      borderRadius="0.75rem"
      bg={error ? '#EF44441A' : '#9CA3AF1A'}
      border={error ? '1px solid #EF44441A' : undefined}
    >
      <HeaderInfo index={index} />
      <Box
        gap="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          gap="xs"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <TextField
              ml="-1rem"
              width="100%"
              lineHeight="l"
              placeholder="0"
              fontFamily="Inter"
              fontWeight="400"
              disabled={!tokenType}
              fontSize={['2xl', '2.25rem']}
              opacity={isEmpty ? 0.4 : undefined}
              fieldProps={{
                width: '100%',
                border: 'none',
                nHover: { border: 'none' },
                color: isEmpty ? '#6B7280' : '#FFFFFF',
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
          </Box>
          <SelectToken index={index} />
        </Box>
        {account?.address && (
          <Box display="flex" justifyContent="space-between" color="outline">
            <AmountInDollar index={index} />
            <Balance index={index} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default React.memo(Input);
