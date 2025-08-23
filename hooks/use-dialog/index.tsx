import { Dialog } from '@/components/dialog';

import { useModal } from '../use-modal';
import { IDialogData } from './use-dialog.types';

export const useDialog = () => {
  const { setContent, handleClose } = useModal();

  return {
    handleClose,
    dialog: {
      promise: async (
        promise: Promise<void>,
        {
          loading,
          success,
          error,
        }: Record<'loading' | 'success', () => IDialogData> & {
          error: (e: unknown) => IDialogData;
        }
      ): Promise<void> => {
        try {
          setContent(<Dialog status="loading" {...loading()} />, {
            title: 'Test',
          });
          await promise;
          setContent(<Dialog status="success" {...success()} />, {
            title: 'Test success',
          });
        } catch (e) {
          setContent(<Dialog status="error" {...error(e)} />, {
            title: 'Test error',
          });
        }
      },
    },
  };
};
