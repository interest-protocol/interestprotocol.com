import { Button } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { SwapSVG } from '@/components/svg';
import ArrowNarrowDown from '@/components/svg/arrow-narrow-down';

import { SwapFlipTokenProps } from './swap-flip-token.types';

const SwapFlipToken: FC<SwapFlipTokenProps> = ({ type }) => {
  const form = useFormContext();

  const { setValue, control } = form;

  const to = useWatch({ control, name: 'to' });
  const from = useWatch({ control, name: 'from' });
  const swapping = useWatch({ control, name: 'swapping' });

  const flipToken = () => {
    if (swapping) return;
    const tmpTo = to;
    const tmpFrom = from;

    setValue('to', { ...tmpFrom, value: '' });
    setValue('from', { ...tmpTo, value: '' });
  };

  return (
    <Button
      p="0.5rem"
      bg="#030712"
      border="none"
      width="2.25rem"
      height="2.25rem"
      cursor="pointer"
      color="#E2E2E6"
      borderRadius="0.75rem"
      onClick={flipToken}
      nHover={{ bg: 'lowContainer' }}
      disabled={(!to && !from) || swapping}
    >
      {type == 'swap' ? (
        <ArrowNarrowDown maxWidth="1.25rem" maxHeight="1.25rem" width="100%" />
      ) : (
        <SwapSVG maxWidth="1.25rem" maxHeight="1.25rem" width="100%" />
      )}
    </Button>
  );
};

export default SwapFlipToken;
