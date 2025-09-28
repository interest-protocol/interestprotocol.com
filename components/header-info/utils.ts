import { formatDollars } from '@/utils/string';

export const titleColors: Record<string, string> = {
  'Total Volume': '#8BA5FF',
  'Total Fees': '#34D399',
  default: '#9CA3AF',
};

export const formatValue = (title: string, value: number | string) => {
  if (typeof value !== 'number') return value;

  const dollarTitles = [
    'Net worth',
    'Portfolio value',
    'Total Volume',
    'Total Fees',
  ];
  if (dollarTitles.includes(title)) return formatDollars(value, 6, 'start');
  if (title === 'Average APR') return `${value}%`;

  return value;
};
