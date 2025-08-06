import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
export interface SwapBottomMenuItemProps {
  price: string;
  symbol: string;
  iconUri?: string;
  // eslint-disable-next-line no-unused-vars
  onClick: () => void;
}

export interface BottomNavListItemProps {
  name: string;
  Icon: FC<SVGProps>;
  isHidden?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: () => void;
  path?: string | undefined;
}

export interface BottomMenuProps {
  name: string;
  path?: string;
  Icon: FC<SVGProps>;
  isHidden?: boolean;
}
