import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

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
      <Box
        p="2xs"
        gap="0.5rem"
        display="flex"
        color="outline"
        alignItems="center"
      >
        <Box width="1rem" height="1rem">
          <SubtractBox
            maxHeight="100%"
            maxWidth="100%"
            width="100%"
            height="100%"
          />
        </Box>
        <Typography size="small" variant="body" fontSize="s">
          0
        </Typography>
      </Box>
    );

  const balance =
    coinsMap[normalizeSuiAddress(type)]?.balance ?? ZERO_BIG_NUMBER;

  const numericBalance = FixedPointMath.toNumber(balance, decimals);

  const handleMax = () => {
    if (label === 'to') return;

    const value = balance.minus(
      FixedPointMath.toBigNumber(isAptos(type) ? 0.01 : 0)
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
  };

  if (label === 'to')
    return (
      <Box display="flex" gap="xs" alignItems="center">
        <Box display={['none', 'block']} width="1.38875rem" height="1.25rem">
          <SubtractBox
            maxHeight="100%"
            maxWidth="100%"
            width="100%"
            height="100%"
          />
        </Box>
        <Typography
          size="small"
          variant="body"
          color="#D1D5DB"
          fontWeight="400"
          fontSize="0.75rem"
          fontFamily="Inter"
          whiteSpace="nowrap"
        >
          {type
            ? `${formatMoney(FixedPointMath.toNumber(balance, decimals))}`
            : '0'}
        </Typography>
        {loading && (
          <Box
            mx="xs"
            mt="-1.7rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box position="absolute" justifySelf="flex-end">
              <ProgressIndicator variant="loading" size={12} />
            </Box>
          </Box>
        )}
      </Box>
    );

  return (
    <Box display="flex" alignItems="center" gap="0.5rem" onClick={handleMax}>
      <Box display={['none', 'block']} width="1.38875rem" height="1.25rem">
        <SubtractBox
          maxHeight="100%"
          maxWidth="100%"
          width="100%"
          height="100%"
        />
      </Box>
      <Typography
        size="small"
        variant="body"
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
      </Typography>
      <MaxBadge handleMax={handleMax} />

      {!coinsMap[normalizeSuiAddress(type)]?.balance && loading && (
        <Box
          mx="xs"
          mt="-1.2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box position="absolute" justifySelf="flex-end">
            <ProgressIndicator variant="loading" size={12} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Balance;
