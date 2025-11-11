import { useAptosWallet } from '@razorlabs/wallet-kit';
import BigNumber from 'bignumber.js';
import { values } from 'ramda';
import { FC, memo, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import { useReadLocalStorage } from 'usehooks-ts';

import { LOCAL_STORAGE_VERSION, TREASURY } from '@/constants';
import { EXCHANGE_FEE_BPS } from '@/constants/fees';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { ZERO_BIG_NUMBER } from '@/utils';
import { ISettings } from '@/views/components/settings-modal/settings-modal.types';

import { Aggregator, MosaicQuoteResponse } from '../swap.types';
import { SwapErrorManager } from './swap-error-manager';

const SwapManager: FC = () => {
  const { control, setValue, getValues } = useFormContext();
  const [hasNoMarket, setHasNoMarket] = useState(false);
  const { mutate } = useCoins();
  const [value] = useDebounce(useWatch({ control, name: 'from.value' }), 800);

  const { account } = useAptosWallet();

  const settings = useReadLocalStorage<ISettings>(
    `${LOCAL_STORAGE_VERSION}-movement-dex-settings`
  ) ?? { slippage: '0.5', aggregator: Aggregator.Interest };

  const [lastQuote] = useDebounce(
    useWatch({ control, name: 'lastQuote' }),
    800
  );

  useEffect(() => {
    setValue('error', null);

    if (!Number(value)) {
      setValue('to.value', '0');
      setValue('to.valueBN', ZERO_BIG_NUMBER);
      setHasNoMarket(false);
      if (!lastQuote) {
        setValue('lastQuote', Date.now());
        mutate();
      }

      return;
    }

    if (lastQuote) return;

    const to = getValues('to');
    const from = getValues('from');

    const slippage = (Number(settings.slippage) * 100).toFixed(0);

    fetch(
      `https://api.mosaic.ag/v1/quote?srcAsset=${from.type}&dstAsset=${
        to.type
      }&amount=${from.valueBN.toFixed(
        0
      )}&feeInBps=${EXCHANGE_FEE_BPS}&feeReceiver=${TREASURY}&includeSources=interest_v2,interest_curve_stable,interest_curve_volatile&slippage=${slippage}&sender=${
        account?.address ?? '0x0'
      }`,
      {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
          'x-api-key': 'tYPtSqDun-w9Yrric2baUAckKtzZh9U0',
        },
      }
    )
      .then((res) => res.json?.())
      .then((data: MosaicQuoteResponse) => {
        if (data.message !== 'successfully') {
          setHasNoMarket(true);
          setValue('to.value', '0');
          throw new Error('Not successfully');
        }

        setValue('lastQuote', Date.now());
        const value = BigNumber(data.data.dstAmount);

        setValue('to.valueBN', value);
        setValue(
          'to.value',
          String(FixedPointMath.toNumber(value, to.decimals))
        );
        setValue('path', data.data.paths);
        setValue('payload', {
          function: data.data.tx.function,
          typeArguments: data.data.tx.typeArguments,
          functionArguments: values(data.data.tx.functionArguments),
        });
        setHasNoMarket(false);
        setValue('focus', false);
      })
      .catch(() => {
        //console.warn({ e });
        setValue('to.value', '0');
        setValue('error', 'Failed to quote');
      });
  }, [value, lastQuote]);

  return <SwapErrorManager hasNoMarket={hasNoMarket} />;
};

export default memo(SwapManager);
