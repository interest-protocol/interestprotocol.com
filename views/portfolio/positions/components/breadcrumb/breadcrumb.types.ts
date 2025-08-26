import { ReactNode } from 'react';

export interface BreadcrumbProps {
  lp: string;
  pools: ReadonlyArray<string>;
}
export interface CrumbTextProps {
  children: ReactNode;
}
