import { Div } from '@stylin.js/elements';
import { not } from 'ramda';
import { FC, useEffect, useState } from 'react';

import TableBodyContent from './body';
import TableHeader from './header';
import { TableHeaderProps } from './table.types';
import { onSort } from './table.utils';

const Table: FC<TableHeaderProps> = ({ rows, ...props }) => {
  const [isAsc, setIsAsc] = useState(true);
  const [currentRows, setCurrentRows] = useState(rows);

  const handleSort = (index: number) => {
    setCurrentRows(onSort(rows, index, isAsc ? 'asc' : 'desc'));
    setIsAsc(not);
  };

  useEffect(() => {
    setCurrentRows(rows);
  }, [rows]);

  return (
    <Div
      width="100%"
      borderStyle="solid"
      borderRadius="0.5rem"
      borderColor=" #1F2937"
      borderWidth="0px 1px 1px 1px"
      overflow="auto"
    >
      <TableHeader sortRows={handleSort} {...props} />
      <TableBodyContent rows={currentRows} {...props} />
    </Div>
  );
};

export default Table;
