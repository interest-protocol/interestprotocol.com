import { Div, P } from '@stylin.js/elements';
import { AnimatePresence, motion } from 'motion/react';
import { FC, useEffect } from 'react';

import useEventListener from '@/hooks/use-event-listener';
import { useModal } from '@/hooks/use-modal';
import { useSafeHeight } from '@/hooks/use-safe-height';

import { DividerSVG, TimesSVG } from '../svg';

const Motion = motion.create(Div);

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
      if (!e.matches) {
        handleClose();
      }
    };

    mediaQuery.addEventListener('change', handler);

    if (!mediaQuery.matches) {
      handleClose();
    }

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
      if (e && (e as KeyboardEvent).key === 'Escape') onHandleClose();
    },
    true
  );

  if (!content) return null;

  return (
    <AnimatePresence>
      {content && (
        <Motion
          inset="0"
          bg="#0007"
          zIndex="9999"
          width="100vw"
          display="flex"
          position="fixed"
          height={safeHeight}
          exit={{ opacity: 0 }}
          justifyContent="center"
          onClick={onHandleClose}
          backdropFilter="blur(10px)"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          pt={`calc(100vh - ${safeHeight}px)`}
          alignItems={['flex-end', 'flex-end', 'flex-end', 'center']}
          {...overlayProps}
        >
          <Motion
            display="flex"
            maxWidth={['100vw', '100vw', '100vw', '95vw']}
            transition={{ duration: 0.5, delay: 0.2 }}
            animate={{ y: ['200vh', '0vh'], scale: [0.5, 1] }}
            maxHeight={[safeHeight * 0.9, safeHeight * 0.9, '90vh']}
            {...containerProps}
            onClick={(e) => {
              e.stopPropagation();
              containerProps?.onClick?.(e);
            }}
          >
            <Div
              pt="1.5rem"
              gap="1rem"
              display="flex"
              color="#ffffff"
              bg="#121313"
              maxHeight="100%"
              flexDirection="column"
              backdropFilter="blur(50px)"
              width={['100vw', '100vw', '100vw', modalWidth || '32rem']}
              border={['none', 'none', 'none', '1px solid #FFFFFF1A']}
              borderRadius={[
                '1rem 1rem 0 0',
                '1rem 1rem 0 0',
                '1rem 1rem 0 0',
                '1rem',
              ]}
            >
              <Div
                px="1.5rem"
                display="flex"
                justifyContent="space-between"
                flexDirection={[
                  'column-reverse',
                  'column-reverse',
                  'column-reverse',
                  'row',
                ]}
              >
                <P
                  flex="1"
                  fontWeight="700"
                  fontFamily="Inter"
                  fontSize={['1rem', '1.125rem']}
                  textAlign={
                    showTitleOnMobile
                      ? [...Array(3).fill(titleAlign || 'left'), 'left', 'left']
                      : 'left'
                  }
                  display={
                    showTitleOnMobile
                      ? ['block', 'block', 'block', 'block']
                      : ['none', 'none', 'none', 'block']
                  }
                >
                  {title}
                </P>

                <Div
                  onClick={handleClose}
                  cursor="pointer"
                  color="#9CA3AF"
                  width="0.85rem"
                  height="0.85rem"
                  nHover={{ color: '#B4C5FF' }}
                  display={['none', 'none', 'none', 'flex']}
                >
                  <TimesSVG maxWidth="100%" maxHeight="100%" width="100%" />
                </Div>

                <Div
                  mb="0.5rem"
                  width="100%"
                  cursor="pointer"
                  onClick={handleClose}
                  justifyContent="center"
                  display={['flex', 'flex', 'flex', 'none']}
                >
                  <DividerSVG
                    width="100%"
                    maxWidth="3rem"
                    maxHeight="0.3125rem"
                    cursor="pointer"
                  />
                </Div>
              </Div>

              <Div flex="1" overflowY="auto" px="1.5rem" pb="1.5rem">
                {content}
              </Div>
            </Div>
          </Motion>
        </Motion>
      )}
    </AnimatePresence>
  );
};

export default ModalProvider;
