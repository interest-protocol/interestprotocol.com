import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { ProgressIndicator } from '@/components/progress-indicator';
import SubtractBox from '@/components/svg/subtract-box';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { formatMoney, isAptos, ZERO_BIG_NUMBER } from '@/utils';

import { InputProps } from './input.types';
import { MaxBadge } from './max-budget';

const Balance: FC<InputProps> = ({ label }) => {
  const { coinsMap, loading } = useCoins();
  const { control, setValue, getValues } = useFormContext();

  const type = useWatch({ control, name: `${label}.type` });
  const decimals = useWatch({ control, name: `${label}.decimals` });

  if (!type)
    return (
      <Div
        p="0.25rem"
        gap="0.5rem"
        display="flex"
        color="#909094"
        alignItems="center"
      >
        <Div width="1rem" height="1rem">
          <SubtractBox
            maxHeight="100%"
            maxWidth="100%"
            width="100%"
            height="100%"
          />
        </Div>
        <P
          color="#D1D5DB"
          fontWeight="400"
          fontSize="0.75rem"
          fontFamily="Inter"
        >
          0
        </P>
      </Div>
    );

  const balance =
    coinsMap[normalizeSuiAddress(type)]?.balance ?? ZERO_BIG_NUMBER;

  const numericBalance =
    FixedPointMath.toNumber(balance) == 0
      ? 0
      : FixedPointMath.toNumber(
          balance.minus(
            FixedPointMath.toBigNumber(
              isAptos(type) && label === 'from' ? 1 : 0
            )
          ),
          decimals
        );

  const handleMax = () => {
    if (label === 'to') return;

    const value = balance.minus(
      FixedPointMath.toBigNumber(isAptos(type) ? 1 : 0)
    );

    if (isAptos(type) && !value.isPositive()) {
      setValue('from.valueBN', ZERO_BIG_NUMBER);
      setValue('from.value', '0');
      return;
    }

    if (getValues('focus')) setValue('focus', false);

    setValue('slider', {});

    setValue(
      `${label}.value`,
      FixedPointMath.toNumber(value, decimals).toString()
    );

    setValue('focus', false);

    setValue(`${label}.valueBN`, value);

    setValue('lastQuote', null);
  };

  if (label === 'to')
    return (
      <Div display="flex" gap="0.5rem" alignItems="center">
        {loading && (
          <Div
            mx="0.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Div position="absolute" justifySelf="flex-end">
              <ProgressIndicator size={12} variant="loading" />
            </Div>
          </Div>
        )}
        <Div display={['none', 'block']} width="1.38875rem" height="1.25rem">
          <SubtractBox
            maxHeight="100%"
            maxWidth="100%"
            width="100%"
            height="100%"
          />
        </Div>
        <P
          fontWeight="400"
          color="#D1D5DB"
          fontSize="0.75rem"
          fontFamily="Inter"
          whiteSpace="nowrap"
        >
          {type
            ? FixedPointMath.toNumber(balance, decimals) === 0
              ? '0.0000'
              : formatMoney(FixedPointMath.toNumber(balance, decimals), 4)
            : '0.0000'}
        </P>
      </Div>
    );

  return (
    <Div display="flex" alignItems="center" gap="0.5rem" onClick={handleMax}>
      {!coinsMap[normalizeSuiAddress(type)]?.balance && loading && (
        <Div
          mx="0.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Div position="absolute" justifySelf="flex-end">
            <ProgressIndicator size={12} variant="loading" />
          </Div>
        </Div>
      )}
      <Div display={['none', 'block']} width="1.38875rem" height="1.25rem">
        <SubtractBox
          maxHeight="100%"
          maxWidth="100%"
          width="100%"
          height="100%"
        />
      </Div>
      <P
        color="#D1D5DB"
        fontWeight="400"
        fontSize="0.75rem"
        fontFamily="Inter"
        lineHeight="1rem"
        whiteSpace="nowrap"
      >
        {type
          ? numericBalance === 0
            ? `0.${'0'.repeat(4)}`
            : formatMoney(numericBalance, 4)
          : '0.0000'}
      </P>
      <MaxBadge handleMax={handleMax} />
    </Div>
  );
};

export default Balance;
