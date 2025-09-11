import { isValidElement } from 'react';

import { TableSummaryCustomProps } from '../table-summary/table-summary.types';

export const isTableSummaryCustom = (
  obj: unknown
): obj is TableSummaryCustomProps => {
  if (typeof obj !== 'object' || obj === null) return false;

  const tmpHeaderSummary = obj as Record<string, unknown>;

  return (
    'Filter' in tmpHeaderSummary && isValidElement(tmpHeaderSummary.Filter)
  );
};
