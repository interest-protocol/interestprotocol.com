import { Box, TextField } from '@interest-protocol/ui-kit';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import { ChangeEvent, FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { FixedPointMath } from '@/lib';
import { parseInputEventToNumberString } from '@/utils';
import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

import Balance from './components/balance';
import AmountInDollar from './components/dollar-value';
import SelectToken from './components/select-token';
import { InputProps } from './input.types';

const Input: FC<InputProps> = ({ index }) => {
  const { register, setValue, getValues, control } =
    useFormContext<CreatePoolForm>();
  const { account } = useAptosWallet();

  useWatch({ control, name: 'tokens' });

  const token = getValues(`tokens.${index}`);
  const rawValue = token?.value;
  const isEmpty = !rawValue || isNaN(+rawValue) || +rawValue <= 0;

  return (
    <Box
      p="1rem"
      gap="0.5rem"
      display="flex"
      bg="#9CA3AF1A"
      height="6.375rem"
      flexDirection="column"
      borderRadius="0.75rem"
    >
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
              disabled={!token?.type}
              fontSize={['2xl', '2.25rem']}
              opacity={isEmpty ? 0.4 : undefined}
              fieldProps={{
                width: '100%',
                border: 'none',
                nHover: {
                  border: 'none',
                },
                color: isEmpty ? '#6B7280' : '#FFFFFF',
              }}
              {...register(`tokens.${index}.value`, {
                onChange: (v: ChangeEvent<HTMLInputElement>) => {
                  const value = parseInputEventToNumberString(v);
                  setValue(`tokens.${index}.value`, value);
                  setValue(
                    `tokens.${index}.valueBN`,
                    FixedPointMath.toBigNumber(value, token?.decimals || 0)
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

export default Input;
