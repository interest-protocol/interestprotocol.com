import { HeaderInfoProps } from '@/components/header-info/header-info.types';

export type AggregationValue = 'daily' | 'weekly' | 'monthly';

export type Aggregation = 'D' | 'W' | 'M';

export interface HeaderSummaryProps {
  data: ReadonlyArray<HeaderInfoProps>;
  aggregation: AggregationValue;
  setAggregation: (aggregation: AggregationValue) => void;
}
