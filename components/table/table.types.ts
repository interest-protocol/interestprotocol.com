import { DivProps, SpanProps } from '@stylin.js/elements';
import { ReactNode } from 'react';

export interface TableHeaderProps
  extends Pick<DivProps, 'gridTemplateColumns'> {
  title: ReadonlyArray<string>;
  rows: ReadonlyArray<TableRowProps>;
}

export interface TableCellProps extends Pick<SpanProps, 'color'> {
  Title?: ReactNode;
  Suffix?: ReactNode;
  Prefix?: ReactNode;
  Content?: ReactNode;
}

export interface TableRowProps {
  cells: ReadonlyArray<TableCellProps>;
}
