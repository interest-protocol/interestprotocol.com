import { Box, TextField } from '@interest-protocol/ui-kit';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { isExponential } from '@/utils';

import Balance from './balance';
import AmountInDollar from './dollar-value';
import HeaderInfo from './header-info';
import SelectToken from './select-token';

const ToInput: FC = () => {
  const { control, getValues } = useFormContext();

  const { account } = useAptosWallet();

  const value = useWatch({ control, name: 'to.value' });

  const isEmpty = !value || isNaN(+value) || +value <= 0;

  return (
    <>
      <HeaderInfo label="to" />
      <Box
        gap="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="0.5rem"
        >
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <TextField
              readOnly
              value={
                isExponential(+value)
                  ? (+value).toFixed(getValues('to.decimals'))
                  : value
              }
              ml="-1rem"
              width="100%"
              lineHeight="l"
              placeholder="0"
              color={isEmpty ? '#6B7280' : '#FFFFFF'}
              fontFamily="Inter"
              fontSize={['2xl', '2.25rem']}
              opacity="1"
              fieldProps={{
                width: '100%',
                border: 'none',
                nHover: {
                  border: 'none',
                },
              }}
            />
          </Box>
          <SelectToken label="to" />
        </Box>

        {account?.address && (
          <Box display="flex" justifyContent="space-between" color="outline">
            <AmountInDollar label="to" />
            <Balance label="to" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default ToInput;
