import { FC } from 'react';

import { CheckSVG, ExclamationCircleSVG, WarningSVG } from '@/components/svg';

import { SVGProps } from '../svg/svg.types';

export const COLOR_MAP: Record<string, string> = {
  warning: '#FCE58A',
  info: '#B4C5FF',
  success: '#BAF6CF',
  error: '#FED7D7',
  warningContainer: '#B35309',
  infoContainer: '#003EA8',
  successContainer: '#157F3D',
  errorContainer: '#C53030',
};

export const STATUS_ICON: Record<string, FC<SVGProps>> = {
  error: WarningSVG,
  warning: ExclamationCircleSVG,
  info: ExclamationCircleSVG,
  success: CheckSVG,
};
