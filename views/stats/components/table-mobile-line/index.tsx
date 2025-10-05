import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { TableMobileLineProps } from './table-mobile-line.types';

const TableMobileLine: FC<TableMobileLineProps> = ({ label, value }) => (
  <Div display="flex" alignItems="center" justifyContent="space-between">
    <P
      color="#9CA3AF"
      fontWeight="400"
      fontFamily="Inter"
      fontSize="0.75rem"
      lineHeight="1.5rem"
    >
      {label}
    </P>
    <P
      color="#FFFFFF"
      fontWeight="400"
      fontFamily="Inter"
      fontSize="0.75rem"
      lineHeight="1.25rem"
      textAlign="right"
    >
      {value}
    </P>
  </Div>
);

export default TableMobileLine;
