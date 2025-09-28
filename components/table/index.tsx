import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import TableBodyContent from './body';
import TableHeader from './header';
import { TableHeaderProps } from './table.types';

const Table: FC<TableHeaderProps> = (props) => {
  return (
    <Div
      width="100%"
      borderStyle="solid"
      borderRadius="0.5rem"
      borderColor=" #1F2937"
      borderWidth="0px 1px 1px 1px"
      overflow="auto"
    >
      <TableHeader {...props} />
      <TableBodyContent {...props} />
    </Div>
  );
};

export default Table;
