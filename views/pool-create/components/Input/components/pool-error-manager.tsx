import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import BigNumber from 'bignumber.js';
import { FC, useEffect, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { isAptos, ZERO_BIG_NUMBER } from '@/utils';
import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

export enum PoolMessagesEnum {
  sameToken = 'Same token selected',
  insufficientBalance = 'Insufficient balance',
  leastOneMove = 'Need to keep at least 1 MOVE',
  invalidAmount = 'Initial price must be greater than 0',
  notEnoughToken = 'Not enough token amount',
}

export const PoolErrorManager: FC = () => {
  const { control, setValue } = useFormContext<CreatePoolForm>();
  const { coinsMap } = useCoins();
  const tokens = useWatch({ control, name: 'tokens' });
  const error = useWatch({ control, name: 'error' });
  const token0 = tokens[0];
  const token1 = tokens[1];
  const coin0 = token0?.type
    ? coinsMap[normalizeSuiAddress(token0.type)]
    : null;
  const balance0 = FixedPointMath.toNumber(
    coin0?.balance ?? ZERO_BIG_NUMBER,
    coin0?.decimals ?? 0
  );
  const coin1 = token1?.type
    ? coinsMap[normalizeSuiAddress(token1.type)]
    : null;
  const balance1 = FixedPointMath.toNumber(
    coin1?.balance ?? ZERO_BIG_NUMBER,
    coin1?.decimals ?? 0
  );

  const isSameToken = useMemo(() => {
    if (!token0?.type || !token1?.type) return false;
    return (
      normalizeSuiAddress(token0.type) === normalizeSuiAddress(token1.type)
    );
  }, [token0, token1]);

  const isInvalidAmount = useMemo(() => {
    if (!token0?.value && !token1?.value) return false;
    return (
      (token0?.value && (isNaN(+token0.value) || +token0.value <= 0)) ||
      (token1?.value && (isNaN(+token1.value) || +token1.value <= 0))
    );
  }, [token0, token1]);

  const isInsufficientBalance = useMemo(() => {
    const checkToken = (token: typeof token0, balance: number) => {
      if (!token?.value || isNaN(+token.value) || +token.value <= 0)
        return false;
      return Number(token.value) > balance;
    };
    return (
      (token0?.value && checkToken(token0, balance0)) ||
      (token1?.value && checkToken(token1, balance1))
    );
  }, [token0, token1, balance0, balance1]);

  const hasAtLeastOneMove = useMemo(() => {
    const checkToken = (token: typeof token0, coin: typeof coin0) => {
      if (
        !isAptos(token?.type) ||
        !coin ||
        !token?.value ||
        isNaN(+token.value) ||
        +token.value <= 0
      ) {
        return false;
      }
      const balanceMinusFee = coin.balance.minus(BigNumber(1000000));
      return (
        FixedPointMath.toNumber(balanceMinusFee, token.decimals) <
        Number(token.value)
      );
    };
    return checkToken(token0, coin0) || checkToken(token1, coin1);
  }, [token0, token1, coin0, coin1]);

  useEffect(() => {
    let newError: string | null = null;

    if (token0?.type || token1?.type || token0?.value || token1?.value) {
      if (isSameToken) {
        newError = PoolMessagesEnum.sameToken;
      } else if (isInvalidAmount) {
        newError = PoolMessagesEnum.invalidAmount;
      } else if (isInsufficientBalance) {
        newError = PoolMessagesEnum.insufficientBalance;
      } else if (hasAtLeastOneMove) {
        newError = PoolMessagesEnum.leastOneMove;
      }
    }

    if (newError !== error) {
      setValue('error', newError);
    }
  }, [
    error,
    token0,
    token1,
    balance0,
    balance1,
    isSameToken,
    isInvalidAmount,
    isInsufficientBalance,
    hasAtLeastOneMove,
    setValue,
  ]);

  return null;
};

export default PoolErrorManager;
