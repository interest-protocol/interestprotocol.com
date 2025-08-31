import { FC } from 'react';

import { Network } from '@/constants';

import { SVGProps } from '../svg/svg.types';

export interface TokenIconProps {
  url?: string;
  size?: string;
  symbol: string;
  withBg?: boolean;
  network: Network;
  rounded?: boolean;
  loaderSize?: number;
  withBorder?: boolean;
}
export interface TokenIconUrl {
  url: string;
}
export interface TokenIconSVG {
  bg?: string;
  color?: string;
  Icon: FC<SVGProps>;
}

export type DefaultTokenIcon = TokenIconUrl | TokenIconSVG;

export type DefaultTokenIcons = Record<
  Network,
  Record<string, DefaultTokenIcon>
>;
