import { FC, useEffect, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

import { CreatePoolErrorMessagesEnum } from './error-section.types';

export const CreatePoolErrorManager: FC = () => {
  const { control, setValue } = useFormContext<CreatePoolForm>();

  const tokens = useWatch({ control, name: 'tokens' });
  const error = useWatch({ control, name: 'error' });

  const baseToken = tokens?.[0];
  const quoteToken = tokens?.[1];

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

  useEffect(() => {
    let newError: string | null = null;

    if (
      baseToken?.type ||
      quoteToken?.type ||
      baseToken?.value ||
      quoteToken?.value
    ) {
      if (isSameToken) {
        newError = CreatePoolErrorMessagesEnum.sameToken;
      } else if (isInvalidAmount) {
        newError = CreatePoolErrorMessagesEnum.invalidAmount;
      }
    }

    if (newError !== error) {
      setValue('error', newError);
    }
  }, [error, baseToken, quoteToken, isSameToken, isInvalidAmount, setValue]);

  return null;
};

export default CreatePoolErrorManager;
