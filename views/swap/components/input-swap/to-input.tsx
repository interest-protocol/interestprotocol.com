import { FC } from 'react';
import { Div, Input } from '@stylin.js/elements';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import { useFormContext, useWatch } from 'react-hook-form';

import { isExponential } from '@/utils';

import Balance from './balance';
import AmountInDollar from './dollar-value';
import HeaderInfo from './header-info';
import SelectToken from './select-token';
import { TextField } from '@/components/text-field';

const ToInput: FC = () => {
  const { control, getValues } = useFormContext();

  const { account } = useAptosWallet();

  const value = useWatch({ control, name: 'to.value' });

  const isEmpty = !value || isNaN(+value) || +value <= 0;

  return (
    <>
      <HeaderInfo label="to" />
      <Div
        gap="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="0.5rem"
        >
          <Div
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
              fieldProps={{
                width: '100%',
                border: 'none',
                nHover: {
                  border: 'none',
                }
              }}
              ml="-1rem"
              width="100%"
              lineHeight="l"
              placeholder="0"
              color={isEmpty ? '#6B7280' : '#FFFFFF'}
              fontFamily="Inter"
              fontSize={['2xl', '2.25rem']}
              opacity="1"
            />
          </Div>
          <SelectToken label="to" />
        </Div>

        {account?.address && (
          <Div display="flex" justifyContent="space-between" color="outline">
            <AmountInDollar label="to" />
            <Balance label="to" />
          </Div>
        )}
      </Div>
    </>
  );
};

export default ToInput;
