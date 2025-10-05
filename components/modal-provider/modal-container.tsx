import { Div } from '@stylin.js/elements';
import { animate, motion, useMotionValue } from 'motion/react';
import { FC } from 'react';

import { ModalContainerProps } from './modal-provider.types';

const Motion = motion.create(Div);

const ModalContainer: FC<ModalContainerProps> = ({
  safeHeight,
  onClose,
  modalWidth,
  containerProps,
  children,
}) => {
  const y = useMotionValue(0);

  return (
    <Motion
      drag="y"
      display="flex"
      dragElastic={0.2}
      animate={{ y: 0 }}
      exit={{ y: safeHeight }}
      initial={{ y: safeHeight }}
      style={{ y, touchAction: 'none' }}
      maxWidth={['100vw', '100vw', '100vw', '95vw']}
      dragConstraints={{ top: 0, bottom: safeHeight }}
      maxHeight={[safeHeight * 0.9, safeHeight * 0.9, '90vh']}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onDragEnd={(_, info) => {
        const shouldClose =
          info.offset.y > safeHeight * 0.25 || info.velocity.y > 600;
        if (shouldClose) {
          animate(y, safeHeight, { duration: 0.2 }).then(onClose);
        } else {
          animate(y, 0, { type: 'spring', stiffness: 300, damping: 30 });
        }
      }}
      {...containerProps}
      onClick={(e) => e.stopPropagation()}
    >
      <Div
        gap="1rem"
        pt="1.5rem"
        display="flex"
        bg="#121313"
        color="#ffffff"
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
        {children}
      </Div>
    </Motion>
  );
};

export default ModalContainer;
