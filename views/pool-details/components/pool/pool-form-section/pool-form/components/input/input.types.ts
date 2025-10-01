import { ReactNode } from 'react';

export interface InputProps {
  label?: string;
  Suffix?: ReactNode;
  readonly?: boolean;
  onlyField?: boolean;
  shortView?: boolean;
  field: `tokenList.${number}` | 'lpCoin';
}

export interface MaxBadgeProps {
  handleMax: () => void;
}
