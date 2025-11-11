import { ReactNode } from 'react';

export interface InputProps {
  label?: string;
  Suffix?: ReactNode;
  readonly?: boolean;
  onlyField?: boolean;
  shortView?: boolean;
  field: `tokenList.${number}` | 'lpCoin';
  onHandleChange?: (amount: string) => void;
}

export interface MaxBadgeProps {
  handleMax: () => void;
}
