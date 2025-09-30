import { HeaderInfoProps } from '@/components/header-info/header-info.types';

export type AggregationValue = 'daily' | 'weekly' | 'monthly';

export type Aggregation = 'D' | 'W' | 'M';

export interface HeaderSummaryProps {
  aggregation: AggregationValue;
  setAggregation: (aggregation: AggregationValue) => void;
}

export interface HeaderSummaryTerminalProps extends HeaderSummaryProps {
  data: ReadonlyArray<HeaderInfoProps>;
}
