import { mergeAll } from 'ramda';
import { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useReadLocalStorage } from 'usehooks-ts';

import { LOCAL_STORAGE_VERSION } from '@/constants';

import { Aggregator, ISwapSettings } from './swap.types';

const SwapInitManager: FC = () => {
  const form = useFormContext();

  const settings = useReadLocalStorage<ISwapSettings>(
    `${LOCAL_STORAGE_VERSION}-movement-dex-settings`
  ) ?? { slippage: '2', aggregator: Aggregator.Interest };

  useEffect(() => {
    form.reset();
    const defaultSettings = form.getValues('settings');
    form.setValue('settings', mergeAll([defaultSettings, settings]));
  }, []);

  useEffect(() => {
    const defaultSettings = form.getValues('settings');
    form.setValue('settings', {
      ...defaultSettings,
      ...settings,
    });
  }, [settings]);

  return null;
};

export default SwapInitManager;
