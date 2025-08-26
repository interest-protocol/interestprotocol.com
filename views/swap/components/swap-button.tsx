import { Div } from '@stylin.js/elements';
import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Button } from '@/components/Button';
import { toasting } from '@/components/toast';

const SwapButton = () => {
  const [loading, setLoading] = useState(false);
  const { control, reset } = useFormContext();

  const error = useWatch({ control, name: 'error' });
  const valueOut = useWatch({ control, name: 'to.value' });
  const valueIn = useWatch({ control, name: 'from.value' });

  const handleSwap = async (stopLoading: () => void) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 4000 + 1000)
    );

    stopLoading();
    if (Math.random() > 0.5) {
      toasting.success({
        action: 'Swap',
        message: 'See on explorer',
        link: '#',
      });
      reset();
    } else throw new Error();
  };

  const onSwap = async () => {
    const dismiss = toasting.loading({ message: 'Swapping...' });
    try {
      setLoading(true);
      await handleSwap(dismiss);
    } catch (e) {
      toasting.error({
        action: 'Swap',
        message: (e as Error).message ?? 'Error executing transaction',
      });
    } finally {
      setLoading(false);
    }
    return;
  };

  const disabled =
    !Number(valueIn) || !Number(valueOut) || valueIn < 0 || valueOut < 0;

  return (
    <Div display="flex" flexDirection="column" mt="0.75rem">
      <Button
        p="1rem"
        onClick={onSwap}
        variant="filled"
        fontSize="1rem"
        lineHeight="1.5rem"
        disabled={disabled || loading}
        cursor={disabled || loading ? 'not-allowed' : 'pointer'}
        nDisabled={{
          bg: error ? '#f6465d' : '#9CA3AF1A',
          color: '#909094',
          ':hover': {
            background: error ? '#f6465d' : '#9CA3AF1A',
            color: '#909094',
          },
        }}
      >
        {loading ? 'Swapping...' : error ? error : 'Confirm Swap'}
      </Button>
    </Div>
  );
};

export default SwapButton;
