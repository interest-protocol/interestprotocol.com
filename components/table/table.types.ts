import { DivProps, SpanProps } from '@stylin.js/elements';
import { ReactNode } from 'react';

export interface TableHeaderProps
  extends Pick<DivProps, 'gridTemplateColumns'> {
  title: ReadonlyArray<TableHeaderTitleProps>;
  rows: ReadonlyArray<TableRowProps>;
  isLoading?: boolean;
}

export interface TableHeaderTitleProps {
  description: string;
  position?: 'left' | 'center' | 'right';
}

export interface TableCellProps extends Pick<SpanProps, 'color'> {
  Title?: ReactNode;
  Suffix?: ReactNode;
  Prefix?: ReactNode;
  Content?: ReactNode;
  position?: 'left' | 'center' | 'right';
}

export interface TableRowProps {
  link?: string;
  target?: string;
  cells: ReadonlyArray<TableCellProps>;
}
