export interface HeaderInfoProps {
  title: string;
  value: number | string;
  symbol?: string;
  date?: string;
}

export const titleColors: Record<string, string> = {
  'Total Volume': '#8BA5FF',
  'Total Fees': '#34D399',
  default: '#9CA3AF',
};
