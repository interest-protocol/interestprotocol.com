import { Div } from '@stylin.js/elements';
import { ChangeEvent, FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { TextField } from '@/components/text-field';
import { FixedPointMath } from '@/lib';
import { parseInputEventToNumberString } from '@/utils';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import HeaderInfo from './components/header-info';
import SelectedToken from './components/selected-token';
import { InputProps } from './input.types';

const Input: FC<InputProps> = ({ index }) => {
  const { register, setValue, getValues } =
    useFormContext<PortfolioDetailsFormProps>();

  const tokenType = useWatch({ name: `tokenList.${index}.type` });
  const tokenDecimals = useWatch({ name: `tokens.${index}.decimals` });

  const rawValue = getValues(`tokenList.${index}.value`);
  const isEmpty = !rawValue || isNaN(+rawValue) || +rawValue <= 0;

  return (
    <Div
      p="1rem"
      gap="0.5rem"
      display="flex"
      bg="#9CA3AF1A"
      height="8.15625rem"
      flexDirection="column"
      borderRadius="0.75rem"
      boxShadow=" 0px 0px 0px 1px #F3F4F61A"
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
              placeholder="0"
              fontWeight="400"
              lineHeight="3rem"
              fontFamily="Inter"
              disabled={!tokenType}
              fontSize={['2rem', '2.25rem']}
              opacity={isEmpty ? 0.4 : undefined}
              fieldProps={{
                width: '100%',
                border: 'none',
                nHover: { border: 'none' },
                color: isEmpty ? '#6B7280' : '#FFFFFF',
              }}
              {...register(`tokenList.${index}.value`, {
                onChange: (v: ChangeEvent<HTMLInputElement>) => {
                  const value = parseInputEventToNumberString(v);
                  setValue(`tokenList.${index}.value`, value, {
                    shouldDirty: true,
                  });
                  setValue(
                    `tokenList.${index}.valueBN`,
                    FixedPointMath.toBigNumber(value, tokenDecimals || 0)
                  );
                },
              })}
            />
          </Div>
          <SelectedToken index={index} />
        </Div>
      </Div>
    </Div>
  );
};

export default Input;
