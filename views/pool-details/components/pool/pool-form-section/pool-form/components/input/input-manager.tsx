import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import useSWR from 'swr';

import { useInterestCurveSdk } from '@/hooks/use-interest-curve-sdk';
import { FixedPointMath } from '@/lib';
import { TokenStandard } from '@/lib/coins-manager/coins-manager.types';
import { ZERO_BIG_NUMBER } from '@/utils';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const InputManager: FC<{ name: `tokenList.${number}` | 'lpCoin' }> = ({
  name,
}) => {
  const curveDex = useInterestCurveSdk();
  const { pool } = usePoolDetailsContext();
  const { control, setValue, getValues } =
    useFormContext<PortfolioDetailsFormProps>();

  const tokenList = useWatch({ control, name: 'tokenList' });
  const amount = useWatch({ control, name: `${name}.value` });
  const selectedCoinIndex = useWatch({ control, name: 'selectedCoinIndex' });

  useSWR([amount, selectedCoinIndex], () => {
    if (!pool) return;

    if (pool.algorithm === 'curve') {
      if (name !== 'lpCoin') {
        if (!tokenList.some(({ value }) => Number(value))) {
          setValue('lpCoin.value', '');
          setValue('lpCoin.valueBN', ZERO_BIG_NUMBER);
        } else
          curveDex
            .quoteAddLiquidity({
              pool: pool.poolAddress,
              amountsIn: tokenList.map((token) =>
                BigInt(token.valueBN?.isZero() ? 0 : token.valueBN.toFixed(0))
              ),
            })
            .then(({ amountOut }) => {
              setValue(
                'lpCoin.value',
                String(
                  FixedPointMath.toNumber(
                    BigNumber(String(amountOut)),
                    getValues('lpCoin.decimals')
                  )
                )
              );
              setValue('lpCoin.valueBN', BigNumber(String(amountOut)));
            });
      } else {
        if (!Number(getValues('lpCoin.value'))) {
          getValues('tokenList').forEach((_, index) => {
            setValue(`tokenList.${index}.value`, '');
            setValue(`tokenList.${index}.valueBN`, ZERO_BIG_NUMBER);
          });
        } else {
          if (selectedCoinIndex.length === 2)
            curveDex
              .quoteRemoveLiquidity({
                pool: pool.poolAddress,
                amountIn: BigInt(getValues('lpCoin.valueBN').toFixed(0)),
              })
              .then(({ amountsOut }) => {
                (amountsOut as Array<string>).forEach((amountOut, index) => {
                  setValue(
                    `tokenList.${index}.value`,
                    String(
                      FixedPointMath.toNumber(
                        BigNumber(amountOut),
                        getValues(`tokenList.${index}.decimals`)
                      )
                    )
                  );
                  setValue(
                    `tokenList.${index}.valueBN`,
                    BigNumber(String(amountOut))
                  );
                });
              })
              .catch();
          else {
            const tmpIndex = selectedCoinIndex[0];
            const opIndex = selectedCoinIndex[0] ? 0 : 1;

            setValue(`tokenList.${opIndex}.value`, '');
            setValue(`tokenList.${opIndex}.valueBN`, ZERO_BIG_NUMBER);

            (tokenList[tmpIndex].standard === TokenStandard.COIN
              ? curveDex.quoteRemoveLiquidityOneCoin({
                  pool: pool.poolAddress,
                  coinOut: tokenList[tmpIndex].type,
                  amountIn: BigInt(getValues('lpCoin.valueBN').toFixed(0)),
                })
              : curveDex.quoteRemoveLiquidityOneFa({
                  pool: pool.poolAddress,
                  faOut: tokenList[tmpIndex].type,
                  amountIn: BigInt(getValues('lpCoin.valueBN').toFixed(0)),
                })
            )
              .then(({ amountOut }) => {
                setValue(
                  `tokenList.${tmpIndex}.valueBN`,
                  BigNumber(String(amountOut))
                );
                setValue(
                  `tokenList.${tmpIndex}.value`,
                  String(
                    FixedPointMath.toNumber(
                      BigNumber(String(amountOut)),
                      getValues(`tokenList.${tmpIndex}.decimals`)
                    )
                  )
                );
              })
              .catch();
          }
        }
      }

      return;
    }
  });

  return null;
};

export default InputManager;
