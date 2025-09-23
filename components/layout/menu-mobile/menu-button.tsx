import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';

import { Button } from '@/components/button';
import { Motion } from '@/components/motion';
import { TimesSVG } from '@/components/svg';

import { MenuButtonProps } from './menu.types';

const menuVariants = {
  open: {
    rotate: '0deg',
    scaleY: 1,
  },
  closed: {
    rotate: '180deg',
    scaleY: 0,
  },
};

const MenuButton: FC<MenuButtonProps> = ({ handleClose }) => (
  <Button
    variant="text"
    p="0.45rem !important"
    borderRadius="50%"
    bg={['unset', '#FFFFFF1A']}
    onClick={handleClose}
    border={['1px solid', '1px solid', '1px solid', 'none']}
    borderColor="disabled"
  >
    <AnimatePresence initial={false}>
      <Motion
        display="flex"
        alignItems="center"
        justifyContent="center"
        animate={menuVariants.open}
        initial={menuVariants.closed}
        color="#E2E2E6"
      >
        <TimesSVG
          width="100%"
          height="100%"
          maxWidth="0.75rem"
          maxHeight="0.75rem"
        />
      </Motion>
    </AnimatePresence>
  </Button>
);

export default MenuButton;
