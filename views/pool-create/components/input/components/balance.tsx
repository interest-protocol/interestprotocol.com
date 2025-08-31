import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { MaxBadge } from '@/components/max-badge';
import { ProgressIndicator } from '@/components/progress-indicator';
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
      <Div
        p="0.25rem"
        gap="0.5rem"
        display="flex"
        color="outline"
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
        <P fontSize="0.75rem">0</P>
      </Div>
    );

  const balance = coinsMap[type]?.balance ?? ZERO_BIG_NUMBER;

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
      {!coinsMap[type]?.balance && loading && (
        <Div
          mx="0.5rem"
          mt="-1.2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Div position="absolute" justifySelf="flex-end">
            <ProgressIndicator />
          </Div>
        </Div>
      )}
    </Div>
  );
};

export default Balance;
