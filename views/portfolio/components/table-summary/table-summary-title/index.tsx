import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { TableSummaryTitleProps } from '../table-summary.types';

const TableSummaryTitle: FC<TableSummaryTitleProps> = ({ title, total }) => (
  <Div gap="0.5rem" display="flex" alignItems="center">
    <P
      fontWeight="400"
      color="#FFFFFF"
      fontSize="1.75rem"
      fontFamily="Inter"
      lineHeight="2.25rem"
    >
      {title}
    </P>
    <Div
      p="0.25rem"
      display="flex"
      bg="#121621"
      height="1.4375rem"
      alignItems="center"
      borderRadius="0.75rem"
      justifyContent="center"
      border="1px solid #9CA3AF1A"
    >
      <Span
        fontWeight="500"
        color="#9CA3AF"
        lineHeight="1rem"
        fontSize="0.75rem"
        fontFamily="Inter"
      >
        {total}
      </Span>
    </Div>
  </Div>
);

export default TableSummaryTitle;
