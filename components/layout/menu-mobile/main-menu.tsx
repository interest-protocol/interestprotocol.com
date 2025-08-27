import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { MainMenuMobileProps } from './menu.types';
import MenuButton from './menu-button';
import MobileMenuList from './menu-list';

const MainMenu: FC<MainMenuMobileProps> = ({ closeMenu }) => (
  <Div
    mx="1.25rem"
    my="0"
    display="flex"
    minHeight="100%"
    flexDirection="column"
    justifyContent="space-between"
  >
    <Div zIndex="2" gridColumn="1/-1">
      <Div
        display={['flex', 'flex', 'flex', 'flex', 'none']}
        flexDirection="row-reverse"
        pb="1.25rem"
        color="#E2E2E6"
      >
        <MenuButton handleClose={closeMenu} />
      </Div>
      <P
        m="1.25rem"
        fontWeight="500"
        fontSize="0.875rem"
        lineHeight="1.25rem"
        fontFamily="Inter"
        color="#E2E2E6"
      >
        More
      </P>
      <MobileMenuList />
    </Div>
  </Div>
);

export default MainMenu;
