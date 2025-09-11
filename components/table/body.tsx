import { Div, Span } from '@stylin.js/elements';
import { FC, isValidElement } from 'react';
import { v4 } from 'uuid';

import { TableHeaderProps } from './table.types';

const TableBodyContent: FC<TableHeaderProps> = ({
  rows,
  title,
  gridTemplateColumns,
}) =>
  rows.map(({ cells }) => (
    <Div
      key={v4()}
      display="grid"
      borderStyle="solid"
      borderColor=" #1F2937"
      nHover={{
        bg: '#9CA3AF1A',
      }}
      cursor="pointer"
      borderWidth=" 1px 0px 0px 0px"
      transition="all 150ms ease-in-out"
      minWidth={['1000px', '1000px', '1000px', '800px', 'unset']}
      gridTemplateColumns={gridTemplateColumns || `repeat(${title.length},1fr)`}
    >
      {cells.map(({ Suffix, Prefix, Title, Content, color, position }) => (
        <Div p="0.75rem" display="flex" key={v4()} width="100%">
          <Div display="flex" alignItems="center" gap="0.5rem" width="100%">
            {isValidElement(Content) ? (
              Content
            ) : (
              <>
                {Prefix}
                {isValidElement(Title) ? (
                  Title
                ) : (
                  <Span
                    color={color || '#fff'}
                    width="100%"
                    display="block"
                    fontWeight="500"
                    fontFamily="Inter"
                    fontSize="0.875rem"
                    lineHeight="1.12rem"
                    textAlign={position || 'left'}
                  >
                    {Title}
                  </Span>
                )}
                {Suffix}
              </>
            )}
          </Div>
        </Div>
      ))}
    </Div>
  ));

export default TableBodyContent;
