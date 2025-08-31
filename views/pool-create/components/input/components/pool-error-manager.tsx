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

  const baseToken = tokens?.[0];
  const quoteToken = tokens?.[1];

  const baseCoin = baseToken?.type ? coinsMap[baseToken.type] : null;
  const baseBalance = FixedPointMath.toNumber(
    baseCoin?.balance ?? ZERO_BIG_NUMBER,
    baseCoin?.decimals ?? 0
  );

  const quoteCoin = quoteToken?.type ? coinsMap[quoteToken.type] : null;
  const quoteBalance = FixedPointMath.toNumber(
    quoteCoin?.balance ?? ZERO_BIG_NUMBER,
    quoteCoin?.decimals ?? 0
  );

  const isSameToken = useMemo(() => {
    if (!baseToken?.type || !quoteToken?.type) return false;
    return baseToken.type === quoteToken.type;
  }, [baseToken, quoteToken]);

  const isInvalidAmount = useMemo(() => {
    if (!baseToken?.value && !quoteToken?.value) return false;
    return (
      (baseToken?.value &&
        (isNaN(+baseToken.value) || +baseToken.value <= 0)) ||
      (quoteToken?.value &&
        (isNaN(+quoteToken.value) || +quoteToken.value <= 0))
    );
  }, [baseToken, quoteToken]);

  const isInsufficientBalance = useMemo(() => {
    const checkToken = (token: typeof baseToken, balance: number) => {
      if (!token?.value || isNaN(+token.value) || +token.value <= 0)
        return false;
      return Number(token.value) > balance;
    };
    return (
      (baseToken?.value && checkToken(baseToken, baseBalance)) ||
      (quoteToken?.value && checkToken(quoteToken, quoteBalance))
    );
  }, [baseToken, quoteToken, baseBalance, quoteBalance]);

  const hasAtLeastOneMove = useMemo(() => {
    const checkToken = (token: typeof baseToken, coin: typeof baseCoin) => {
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
    return checkToken(baseToken, baseCoin) || checkToken(quoteToken, quoteCoin);
  }, [baseToken, quoteToken, baseCoin, quoteCoin]);

  useEffect(() => {
    let newError: string | null = null;

    if (
      baseToken?.type ||
      quoteToken?.type ||
      baseToken?.value ||
      quoteToken?.value
    ) {
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
    baseToken,
    quoteToken,
    baseBalance,
    quoteBalance,
    isSameToken,
    isInvalidAmount,
    isInsufficientBalance,
    hasAtLeastOneMove,
    setValue,
  ]);

  return null;
};

export default PoolErrorManager;
