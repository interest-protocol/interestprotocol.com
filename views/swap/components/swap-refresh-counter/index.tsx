import { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { ProgressIndicator } from '@/components/progress-indicator';

import { INTERVAL_IN_SECONDS } from '../swap.data';
import { SwapForm } from '../swap.types';

const SwapRefreshCounter: FC = () => {
  const [timer, setTimer] = useState(0);
  const { watch, setValue } = useFormContext<SwapForm>();

  const lastQuote = watch('lastQuote');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!lastQuote) return;

      const timeBetween = lastQuote + INTERVAL_IN_SECONDS * 1000 - Date.now();

      const timeBetweenInSecs = timeBetween / 1000;

      if (timeBetweenInSecs > 0) return setTimer(timeBetweenInSecs);

      clearInterval(interval);
      return setValue('lastQuote', null);
    }, 250);

    return () => clearInterval(interval);
  }, [lastQuote]);

  if (!lastQuote) return null;

  return <ProgressIndicator size={16} value={timer * 10} />;
};

export default SwapRefreshCounter;
