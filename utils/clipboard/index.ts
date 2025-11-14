import { toasting } from '@/components/toast';

export const copyToClipboard = (content: string, successMessage?: string) => {
  window.navigator.clipboard.writeText(content || '');
  toasting.success({
    action: successMessage || 'Copied to clipboard',
  });
};
