import { Div } from '@stylin.js/elements';

import { BOTTOM_MENU_ITEMS } from './bottom-menu.data';
import BottomNavListItem from './bottom-nav-list-item';

const BottomNavList = () => {
  return (
    <Div display="flex" bg="#9CA3AF1A">
      {BOTTOM_MENU_ITEMS.map(({ name, path, Icon, isHidden }, index) => (
        <BottomNavListItem
          key={index}
          Icon={Icon}
          name={name}
          path={path}
          isHidden={isHidden}
        />
      ))}
    </Div>
  );
};

export default BottomNavList;
