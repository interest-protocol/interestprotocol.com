import { Div } from '@stylin.js/elements';
import { AnimatePresence } from 'motion/react';
import { FC, useEffect } from 'react';

import useEventListener from '@/hooks/use-event-listener';
import { useModal } from '@/hooks/use-modal';
import { useSafeHeight } from '@/hooks/use-safe-height';

import ModalContainer from './modal-container';
import ModalHeader from './modal-header';
import { ModalOverlay } from './modal-overlay';

const ModalProvider: FC = () => {
  const {
    title,
    content,
    onClose,
    allowClose,
    mobileOnly,
    titleAlign,
    modalWidth,
    handleClose,
    overlayProps,
    containerProps,
    showTitleOnMobile,
  } = useModal();
  const safeHeight = useSafeHeight();

  useEffect(() => {
    if (!mobileOnly) return;
    const mediaQuery = window.matchMedia('(max-width: 990px)');
    const handler = (e: MediaQueryListEvent) => {
      if (!e.matches) handleClose();
    };
    mediaQuery.addEventListener('change', handler);
    if (!mediaQuery.matches) handleClose();
    return () => mediaQuery.removeEventListener('change', handler);
  }, [mobileOnly, handleClose]);

  const onHandleClose = () => {
    if (!allowClose) return;
    handleClose();
    onClose?.();
  };

  useEventListener(
    'keydown',
    (e) => {
      if (e instanceof KeyboardEvent && e.key === 'Escape') {
        onHandleClose();
      }
    },
    true
  );

  if (!content) return null;

  return (
    <AnimatePresence>
      <ModalOverlay
        onClick={onHandleClose}
        safeHeight={safeHeight}
        overlayProps={overlayProps}
      >
        <ModalContainer
          safeHeight={safeHeight}
          onClose={onHandleClose}
          modalWidth={modalWidth}
          containerProps={containerProps}
        >
          <ModalHeader
            title={title || ''}
            titleAlign={titleAlign}
            showTitleOnMobile={showTitleOnMobile}
            handleClose={handleClose}
          />
          <Div flex="1" overflowY="auto" px="1.5rem" pb="1.5rem">
            {content}
          </Div>
        </ModalContainer>
      </ModalOverlay>
    </AnimatePresence>
  );
};

export default ModalProvider;
