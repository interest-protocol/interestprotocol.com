import { Div, Span } from '@stylin.js/elements';
import { AnimatePresence } from 'motion/react';
import { FC, useState } from 'react';

import DirectionalMenu from '@/components/directional-menu';
import { ChevronDownSVG, LogoLettersSVG, LogoSVG } from '@/components/svg';

import SidebarContent from './sidebar-content';

const Sidebar: FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <Div>
      <Div
        p="1rem"
        display="flex"
        gap="0.825rem"
        color="#F8F9FD"
        alignItems="center"
      >
        <LogoSVG maxWidth="1.75rem" width="100%" />
        <LogoLettersSVG maxHeight="1.25rem" height="100%" />
        <Span color="#9CA3AF" cursor="pointer" onClick={toggleMenu}>
          <ChevronDownSVG width="100%" maxWidth="0.825rem" />
        </Span>
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
