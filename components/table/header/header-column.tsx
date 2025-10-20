import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TableHeaderColumnProps } from '../table.types';

const TableHeaderColumn: FC<TableHeaderColumnProps> = ({
  index,
  position,
  sortRows,
  isSortable,
  description,
}) => {
  return (
    <Div
      key={v4()}
      width="100%"
      px="0.75rem"
      py="0.875rem"
      cursor={isSortable ? 'pointer' : 'default'}
      nHover={{
        opacity: isSortable ? '.6' : '1',
      }}
      onClick={() => {
        isSortable && sortRows(index);
      }}
    >
      <Span
        width="100%"
        color="#fff"
        display="block"
        fontSize="1rem"
        fontWeight="500"
        fontFamily="Inter"
        lineHeight="1.25rem"
        textAlign={position || 'left'}
      >
        {description}
      </Span>
    </Div>
  );
};

export default TableHeaderColumn;
