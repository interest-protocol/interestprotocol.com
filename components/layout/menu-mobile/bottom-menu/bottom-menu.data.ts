import {
  ArrangeSquareSVG,
  MoreSVG,
  PoolSVG,
  PortfolioSVG,
} from '@/components/svg';
import { Routes, RoutesEnum } from '@/constants';

import { BottomMenuProps } from './bottom-menu.types';

export const BOTTOM_MENU_ITEMS: ReadonlyArray<BottomMenuProps> = [
  {
    name: 'swap',
    Icon: ArrangeSquareSVG,
    path: Routes[RoutesEnum.Swap],
  },
  {
    name: 'Pool',
    Icon: PoolSVG,
    path: Routes[RoutesEnum.Pool],
  },
  {
    Icon: PortfolioSVG,
    name: 'Portfolio',
    path: Routes[RoutesEnum.Portfolio],
  },
  {
    Icon: MoreSVG,
    name: 'more',
  },
];
