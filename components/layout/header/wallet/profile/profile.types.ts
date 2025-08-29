import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface ProfileMenuItemProps {
  name: string;
  description: string;
  Icon: FC<SVGProps>;
  hasBorder: boolean;
  disabled?: boolean;
  handleAction?: Record<string, () => void | Promise<void>>;
}

export interface CurrenciesMenuItemProps {
  name?: string;
  symbol: string;
  Icon: FC<SVGProps>;
}

export interface MenuSwitchAccountProps {
  isOpen: boolean;
  onBack: () => void;
  handleCloseProfile: () => void;
}

export interface MenuSwitchAccountHeaderProps {
  onBack: () => void;
  handleCloseProfile: () => void;
  size: number;
}

export interface SettingOptionProps {
  label: string;
  description?: string;
  isToggleEnable: boolean;
  onClick?: () => void;
}

export interface AvatarProps {
  isLarge?: boolean;
  accountAddress?: string;
  withNameOrAddress?: boolean;
  nameOrAddressPosition?: 'left' | 'right';
}

export interface ProfileProps {
  disconnect: () => void;
}
