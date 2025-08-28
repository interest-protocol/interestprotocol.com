import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Button } from '@/components/Button';
import { toasting } from '@/components/toast';

import { ICreateTokenForm } from '../../create-token.types';

const CreateTokenFormButton: FC = () => {
  const [loading, setLoading] = useState(false);
  const { control, reset } = useFormContext<ICreateTokenForm>();

  const values = useWatch({ control });

  const handleCreateToken = async (stopLoading: () => void) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 4000 + 1000)
    );

    stopLoading();
    if (Math.random() > 0.5) {
      toasting.success({
        action: 'Create token',
        message: 'See on explorer',
        link: '#',
      });
      reset();
    } else throw new Error();
  };

  const onSubmit = async () => {
    const dismiss = toasting.loading({ message: 'Create token...' });
    try {
      setLoading(true);
      await handleCreateToken(dismiss);
    } catch (e) {
      toasting.error({
        action: 'Create token',
        message: (e as Error).message ?? 'Error executing transaction',
      });
    } finally {
      setLoading(false);
    }
    return;
  };

  const isRequiredFieldsFilled = !!(values.name && values.symbol);

  return (
    <Div
      gap="1.5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        p="1rem"
        width="100%"
        variant="filled"
        fontSize="1rem"
        lineHeight="1.5rem"
        disabled={!isRequiredFieldsFilled || loading}
        onClick={onSubmit}
      >
        {loading ? 'Creating token...' : 'Create Token'}
      </Button>
    </Div>
  );
};

export default CreateTokenFormButton;
