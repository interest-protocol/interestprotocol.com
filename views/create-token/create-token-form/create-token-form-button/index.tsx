import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Button } from '@/components/Button';
import { useDialog } from '@/hooks/use-dialog';
import SuccessModal from '@/views/components/success-modal';

import { ICreateTokenForm } from '../../create-token.types';

const CreateTokenFormButton: FC = () => {
  const { dialog, handleClose } = useDialog();
  const { control, getValues, reset } = useFormContext<ICreateTokenForm>();

  const values = useWatch({ control });

  const onCloseModal = (resetForm?: boolean) => {
    if (resetForm) reset();
    handleClose();
  };

  const gotoExplorer = () =>
    window.open(values.explorerLink, '_blank', 'noopener,noreferrer');

  const handleCreateToken = async () => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 4000 + 1000)
    );

    if (Math.random() > 0.5) console.log('>>>>Sucesso');
    else throw new Error();
  };

  const onSubmit = () =>
    dialog.promise(handleCreateToken(), {
      loading: () => ({
        title: 'Creating Token...',
        message:
          'We are creating the token, and you will let you know when it is done',
      }),
      error: (error) => ({
        title: 'Creation Failure',
        message:
          (error as Error).message ||
          'Your token creation failed, please try again or contact the support team',
        primaryButton: {
          label: 'Try again',
          onClick: () => onCloseModal(false),
        },
      }),
      success: () => ({
        title: 'Token Created!',
        message: (
          <SuccessModal
            transactionTime={`${(
              Number(getValues('executionTime')) / 1000
            ).toFixed(2)}`}
          />
        ),
        primaryButton: {
          label: 'See on Explorer',
          onClick: gotoExplorer,
        },
        secondaryButton: (
          <Button variant="outline" onClick={() => onCloseModal(true)}>
            Got it
          </Button>
        ),
      }),
    });

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
        variant="filled"
        fontSize="1rem"
        lineHeight="1.5rem"
        disabled={!isRequiredFieldsFilled}
        onClick={onSubmit}
      >
        Create Token
      </Button>
    </Div>
  );
};

export default CreateTokenFormButton;
