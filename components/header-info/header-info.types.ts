export interface HeaderInfoProps {
  title: string;
  date?: string;
  dateValue?: string;
  symbol?: string;
  right?: boolean;
  hideDate?: boolean;
  value: number | string;
}

export const titleColors: Record<string, string> = {
  'Total Volume': '#8BA5FF',
  'Total Fees': '#34D399',
  default: '#9CA3AF',
};
