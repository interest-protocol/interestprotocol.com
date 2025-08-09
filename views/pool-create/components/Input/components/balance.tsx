import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { MaxBadge } from '@/components/max-badge';
import SubtractBox from '@/components/svg/subtract-box';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { formatMoney, isAptos, ZERO_BIG_NUMBER } from '@/utils';
import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

import { InputProps } from '../input.types';

const Balance: FC<InputProps> = ({ index }) => {
  const { coinsMap, loading } = useCoins();
  const { control, setValue } = useFormContext<CreatePoolForm>();

  const type = useWatch({ control, name: `tokens.${index}.type` });
  const decimals = useWatch({ control, name: `tokens.${index}.decimals` });

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
    const value = balance.minus(
      FixedPointMath.toBigNumber(isAptos(type) ? 0.01 : 0)
    );

    if (isAptos(type) && !value.isPositive()) {
      setValue(`tokens.${index}.valueBN`, ZERO_BIG_NUMBER);
      setValue(`tokens.${index}.value`, '0');
      return;
    }

    setValue(
      `tokens.${index}.value`,
      FixedPointMath.toNumber(value, decimals).toString()
    );
    setValue(`tokens.${index}.valueBN`, value);
  };

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
