import {
  BridgeSVG,
  DoubleChevronSVG,
  MoreSVG,
  PoolSVG,
} from '@/components/svg';
import { Routes, RoutesEnum } from '@/constants';

import { BottomMenuProps } from './bottom-menu.types';

export const BOTTOM_MENU_ITEMS: ReadonlyArray<BottomMenuProps> = [
  {
    name: 'swap',
    Icon: DoubleChevronSVG,
    path: Routes[RoutesEnum.Swap],
  },
  {
    name: 'Pool',
    Icon: PoolSVG,
    path: Routes[RoutesEnum.Pool],
  },
  {
    Icon: BridgeSVG,
    name: 'bridge',
    path: 'https://bridge.movementnetwork.xyz/',
  },
  {
    Icon: MoreSVG,
    name: 'more',
  },
];
