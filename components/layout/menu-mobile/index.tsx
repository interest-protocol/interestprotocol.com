import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import SideBarMenuListItem from './menu-list-item';
import { MENU_MOBILE_ITEMS } from './menu-mobile.data';

const MobileMenu: FC = () => (
  <Div width="100%" display="flex" flexDirection="column" gap="0.5rem">
    {MENU_MOBILE_ITEMS.map((item, index) => (
      <SideBarMenuListItem key={v4()} index={index} {...item} />
    ))}
  </Div>
);

export default MobileMenu;
