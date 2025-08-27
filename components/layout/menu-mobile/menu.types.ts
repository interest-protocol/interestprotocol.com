import { Dispatch, FC, SetStateAction } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface MainMenuMobileProps {
  isOpen?: boolean;
  closeMenu: () => void;
}

export interface MenuItemCollapsibleProps {
  accordionList?: ReadonlyArray<AccordionItemProps>;
}

export interface MenuMobileItemProps extends MenuItemCollapsibleProps {
  name: string;
  path?: string;
  disabled?: boolean;
  Icon: FC<SVGProps>;
  index: number;
}

export interface MenuButtonProps {
  handleClose: () => void;
}

export interface AccordionItemProps {
  name: string;
  path: string;
  disabled: boolean;
}

export interface AccordionItemProps {
  name: string;
  path: string;
  disabled: boolean;
}

export interface MenuItemCollapsibleProps {
  accordionList?: ReadonlyArray<AccordionItemProps>;
}

export interface MenuItemTitleContentProps extends MenuItemCollapsibleProps {
  name: string;
  path?: string;
  disabled: boolean;
  Icon: FC<SVGProps>;
  isCollapsed: boolean;
}

export interface MenuItemProps extends MenuItemTitleContentProps {
  alpha?: boolean;
  setIsCollapsed: (value: boolean) => void;
  setTemporarilyOpen: Dispatch<SetStateAction<boolean>>;
}
