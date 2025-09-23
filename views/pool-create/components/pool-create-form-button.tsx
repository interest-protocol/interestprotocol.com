import { FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Button } from '@/components/button';
import { toasting } from '@/components/toast';

import { CreatePoolForm } from '../pool-create.types';

const PoolCreateFormButton: FC = () => {
  const [loading, setLoading] = useState(false);
  const { control, reset } = useFormContext<CreatePoolForm>();

  const error = useWatch({ control, name: 'error' });
  const volatilityStrategyType = useWatch({
    control,
    name: 'volatilityStrategyType',
  });

  const handleCreatePool = async (stopLoading: () => void) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 4000 + 1000)
    );

    stopLoading();
    if (Math.random() > 0.5) {
      toasting.success({
        action: 'Create pool',
        message: 'See on explorer',
        link: '#',
      });
      reset();
    } else throw new Error();
  };

  const onSubmit = async () => {
    const dismiss = toasting.loading({ message: 'Create pool...' });
    try {
      setLoading(true);
      await handleCreatePool(dismiss);
    } catch (e) {
      toasting.error({
        action: 'Create pool',
        message: (e as Error).message ?? 'Error executing transaction',
      });
    } finally {
      setLoading(false);
    }
    return;
  };
  const isRequiredFieldsFilled = !error && volatilityStrategyType;

  return (
    <Button
      mt="0.5rem"
      variant="filled"
      fontSize="1rem"
      onClick={onSubmit}
      disabled={!isRequiredFieldsFilled || loading}
    >
      {loading ? 'Creating Pool...' : 'Create Pool'}
    </Button>
  );
};

export default PoolCreateFormButton;
