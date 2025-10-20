import { parseFormattedMoney } from '@/utils';

import { TableCellProps, TableRowProps } from './table.types';

export const onSortA = (
  rows: ReadonlyArray<TableRowProps>,
  cellIndex: number,
  order: 'asc' | 'desc' = 'asc'
): ReadonlyArray<TableRowProps> => {
  return [...rows].sort((a, b) => {
    const cellA = a.cells[cellIndex];
    const cellB = b.cells[cellIndex];

    if (!cellA || !cellB) return 0;

    const getTextContent = (cell: TableCellProps): string => {
      if (cell.Title) {
        return typeof cell.Title === 'string' ? cell.Title : String(cell.Title);
      }
      if (cell.Content) {
        return typeof cell.Content === 'string'
          ? cell.Content
          : String(cell.Content);
      }
      return '';
    };

    const valueA = getTextContent(cellA);
    const valueB = getTextContent(cellB);

    const numA = parseFormattedMoney(valueA);
    const numB = parseFormattedMoney(valueB);

    if (!isNaN(numA) && !isNaN(numB)) {
      return order === 'asc' ? numA - numB : numB - numA;
    }

    const comparison = valueA.localeCompare(valueB);
    return order === 'asc' ? comparison : -comparison;
  });
};

export const onSort = (
  rows: ReadonlyArray<TableRowProps>,
  cellIndex: number,
  order: 'asc' | 'desc' = 'asc'
): ReadonlyArray<TableRowProps> => {
  return [...rows].sort((a, b) => {
    const cellA = a.cells[cellIndex];
    const cellB = b.cells[cellIndex];

    if (!cellA || !cellB) return 0;

    const getSortValue = (cell: TableCellProps): string => {
      const content = cell.Content || cell.Title;

      // Tenta extrair o ID do ReactElement
      console.log('##', content as React.ReactElement, '>>>ID', {
        ...rows[0].cells[1],
      });
      if (content && typeof content === 'object' && 'props' in content) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const props = (content as any).props;
        // Se tem um ID, busca o elemento no DOM
        if (props?.id) {
          const element = document.getElementById(props.id);
          console.log('**', element, '>>>ID');

          if (element) {
            // Primeiro tenta pegar data-value
            const dataValue = element.getAttribute('data-value');
            if (dataValue) {
              return dataValue;
            }
            // Fallback para o textContent
            return element.textContent || '';
          }
        }

        // Fallback para children se existir
        if (props?.children) {
          return String(props.children);
        }
      }

      // Fallback para string
      if (typeof content === 'string') {
        return content;
      }

      return String(content || '');
    };

    const valueA = getSortValue(cellA);
    const valueB = getSortValue(cellB);

    const numA = parseFormattedMoney(valueA);
    const numB = parseFormattedMoney(valueB);

    if (!isNaN(numA) && !isNaN(numB)) {
      return order === 'asc' ? numA - numB : numB - numA;
    }

    const comparison = valueA.localeCompare(valueB);
    return order === 'asc' ? comparison : -comparison;
  });
};
