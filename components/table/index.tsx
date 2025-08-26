import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import HeaderText from './components/header-text';
import { TableProps } from './table.types';

const Table: FC<TableProps> = ({ columns, gridTemplateColumns, children }) => (
  <Div
    mb="2rem"
    width="100%"
    height="auto"
    borderBottom="0"
    borderRadius="0.75rem"
    overflowX={['auto', 'visible']}
  >
    <Div
      gap="0.5rem"
      width="100%"
      bg="#9CA3AF1A"
      display="grid"
      height="3.03125rem"
      alignItems="center"
      px={['0.5rem', '1rem']}
      borderTopLeftRadius="0.5rem"
      borderTopRightRadius="0.5rem"
      borderBottom="1px solid #1F2937"
      gridTemplateColumns={gridTemplateColumns}
    >
      {columns.map((column) => (
        <HeaderText key={unikey()}>{column}</HeaderText>
      ))}
    </Div>
    {children}
  </Div>
);

export default Table;
