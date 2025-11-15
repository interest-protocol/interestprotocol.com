import { ReactNode } from 'react';

export interface InputProps {
  label?: string;
  Suffix?: ReactNode;
  readonly?: boolean;
  onlyField?: boolean;
  shortView?: boolean;
  type?: 'default' | 'radio';
  field: `tokenList.${number}` | 'lpCoin';
  onHandleChange?: (amount: string) => void;
  onSelectToken?: (index: number) => void;
}

export interface MaxBadgeProps {
  handleMax: () => void;
}
