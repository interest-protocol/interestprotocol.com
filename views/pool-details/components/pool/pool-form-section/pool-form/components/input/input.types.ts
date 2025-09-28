import { ReactNode } from 'react';

export interface InputProps {
  field: string;
  label?: string;
  Suffix?: ReactNode;
  readonly?: boolean;
  onlyField?: boolean;
  shortView?: boolean;
}

export interface MaxBadgeProps {
  handleMax: () => void;
}
