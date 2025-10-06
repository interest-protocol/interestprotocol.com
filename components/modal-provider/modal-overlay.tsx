import { Div } from '@stylin.js/elements';
import { motion } from 'motion/react';
import { FC } from 'react';

import { ModalOverlayProps } from './modal-provider.types';

const Motion = motion.create(Div);

export const ModalOverlay: FC<ModalOverlayProps> = ({
  onClick,
  safeHeight,
  overlayProps,
  children,
}) => (
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
    onClick={onClick}
    backdropFilter="blur(10px)"
    animate={{ opacity: [0, 1] }}
    transition={{ duration: 0.3 }}
    pt={`calc(100vh - ${safeHeight}px)`}
    alignItems={['flex-end', 'flex-end', 'flex-end', 'center']}
    {...overlayProps}
  >
    {children}
  </Motion>
);
