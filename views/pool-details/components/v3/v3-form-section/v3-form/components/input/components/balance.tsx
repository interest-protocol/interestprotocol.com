import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { ProgressIndicator } from '@/components/progress-indicator';
import SubtractBox from '@/components/svg/subtract-box';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { formatMoney, isAptos, ZERO_BIG_NUMBER } from '@/utils';

import { InputProps } from '../input.types';
import { MaxBadge } from './max-budget';

const Balance: FC<InputProps> = ({ field }) => {
  const { coinsMap, loading } = useCoins();
  const { control, setValue } = useFormContext();

  const type = useWatch({ control, name: `${field}.type` });
  const decimals = useWatch({ control, name: `${field}.decimals` });

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

  const numericBalance = FixedPointMath.toNumber(balance, decimals);

  const handleMax = () => {
    const value = balance.minus(
      FixedPointMath.toBigNumber(isAptos(type) ? 0.01 : 0)
    );

    setValue(
      `${field}.value`,
      FixedPointMath.toNumber(value, decimals).toString()
    );

    setValue(`${field}.valueBN`, value);
  };

  return (
    <Div display="flex" alignItems="center" gap="0.5rem" onClick={handleMax}>
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

      {!coinsMap[normalizeSuiAddress(type)]?.balance && loading && (
        <Div
          mx="0.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Div position="absolute" justifySelf="flex-end">
            <ProgressIndicator size={16} variant="loading" />
          </Div>
        </Div>
      )}
    </Div>
  );
};

export default Balance;
