import { DialogProps } from '@/components/dialog';

export type IDialogData = Omit<DialogProps, 'isOpen' | 'status'>;
