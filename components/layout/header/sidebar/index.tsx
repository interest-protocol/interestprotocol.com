import { Div } from '@stylin.js/elements';
import { AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';

import DirectionalMenu from '@/components/directional-menu';
import {
  ChevronDownSVG,
  ListSVG,
  LogoLettersSVG,
  LogoSVG,
} from '@/components/svg';

import SidebarContent from './sidebar-content';

const Sidebar: FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <Div>
      <Div
        py="1rem"
        display="flex"
        gap="0.825rem"
        color="#F8F9FD"
        alignItems="center"
      >
        <LogoSVG maxWidth="1.75rem" width="100%" />
        <Div display={['none', 'none', 'none', 'flex', 'flex']}>
          <LogoLettersSVG
            maxHeight="1.25rem"
            maxWidth="100%"
            width="100%"
            height="100%"
          />
        </Div>

        <Div color="#9CA3AF" cursor="pointer" onClick={toggleMenu}>
          <Div display={['flex', 'flex', 'flex', 'none']} alignItems="center">
            <ListSVG width="100%" maxWidth="1.25rem" maxHeight="1.25rem" />
          </Div>
          <Div display={['none', 'none', 'none', 'block']}>
            <ChevronDownSVG width="100%" maxWidth="0.825rem" />
          </Div>
        </Div>
      </Div>
      <AnimatePresence>
        {open && (
          <DirectionalMenu onClose={toggleMenu}>
            <SidebarContent />
          </DirectionalMenu>
        )}
      </AnimatePresence>
    </Div>
  );
};

export default Sidebar;
