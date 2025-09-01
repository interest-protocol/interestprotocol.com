import { Button } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

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
      py="1rem"
      mt="0.5rem"
      width="100%"
      border="none"
      fontSize="1rem"
      fontWeight="500"
      cursor="pointer"
      onClick={onSubmit}
      fontFamily="Inter"
      borderRadius="0.75rem"
      justifyContent="center"
      disabled={!isRequiredFieldsFilled}
      bg={!isRequiredFieldsFilled ? '#9CA3AF1A' : '#B4C5FF'}
      color={!isRequiredFieldsFilled ? '#9CA3AF' : '#002A78'}
    >
      {loading ? 'Creating Pool...' : 'Create Pool'}
    </Button>
  );
};

export default PoolCreateFormButton;
