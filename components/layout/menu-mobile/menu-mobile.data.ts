import { ChartSquareSVG, CirclePlusSVG } from '@/components/svg';
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
    Icon: ChartSquareSVG,
    name: 'Stats',
    path: Routes[RoutesEnum.Stats],
    disabled: false,
  },
];
