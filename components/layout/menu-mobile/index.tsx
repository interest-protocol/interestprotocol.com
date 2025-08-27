import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import MainMenu from './main-menu';
import { MainMenuMobileProps } from './menu.types';

const MenuMobile: FC<MainMenuMobileProps> = ({ isOpen, closeMenu }) => {
  if (!isOpen) return null;

  return (
    <Div>
      <Div
        top="0"
        pt="1.25rem"
        left="0"
        zIndex={4}
        width="100vw"
        height="100vh"
        overflowY="auto"
        position="fixed"
        bg="#1F1F23"
        display={['block', 'block', 'block', 'block', 'none']}
      >
        <MainMenu closeMenu={closeMenu} />
      </Div>
    </Div>
  );
};

export default MenuMobile;
