import { CirclePlusSVG, DefaultSVG, HourglassSVG } from '@/components/svg';
import { Routes, RoutesEnum } from '@/constants';

import { MenuItemProps } from './menu.types';

export const MENU_MOBILE_ITEMS: ReadonlyArray<
  Omit<
    MenuItemProps,
    'setIsCollapsed' | 'isCollapsed' | 'setTemporarilyOpen' | 'temporarilyOpen'
  >
> = [
  {
    Icon: CirclePlusSVG,
    name: 'Create Token',
    path: Routes[RoutesEnum.CreateToken],
    disabled: false,
  },
  {
    Icon: HourglassSVG,
    name: 'DCA',
    path: Routes[RoutesEnum.DCA],
    disabled: false,
  },
  {
    Icon: DefaultSVG,
    name: 'Portfolio',
    path: Routes[RoutesEnum.Portfolio],
    disabled: false,
  },
];
