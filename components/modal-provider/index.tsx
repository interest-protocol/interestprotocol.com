import { AnimatePresence } from 'motion/react';
import { FC } from 'react';

import useEventListener from '@/hooks/use-event-listener';
import { useModal } from '@/hooks/use-modal';

const ModalProvider: FC = () => {
  const { content, onClose, allowClose, handleClose } = useModal();

  const onHandleClose = () => {
    if (!allowClose) return;

    handleClose();
    onClose?.();
  };

  useEventListener(
    'keydown',
    (e) => {
      if (e && (e as KeyboardEvent).key === 'Escape') onHandleClose();
    },
    true
  );

  if (!content) return null;

  return <AnimatePresence>{content}</AnimatePresence>;
};

export default ModalProvider;
