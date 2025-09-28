import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TableHeaderProps } from './table.types';

const TableHeader: FC<Omit<TableHeaderProps, 'rows'>> = ({
  title,
  gridTemplateColumns,
}) => {
  return (
    <Div
      width="100%"
      display="grid"
      bg="#9CA3AF1A"
      borderTopLeftRadius="0.5rem"
      borderTopRightRadius="0.5rem"
      minWidth={['1000px', '1000px', '400px', 'unset']}
      gridTemplateColumns={gridTemplateColumns || `repeat(${title.length},1fr)`}
    >
      {title.map(({ description, position }) => (
        <Div px="0.75rem" py="0.875rem" width="100%" key={v4()}>
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
      ))}
    </Div>
  );
};

export default TableHeader;
