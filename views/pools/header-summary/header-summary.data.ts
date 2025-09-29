import { Aggregation, AggregationValue } from './pool-header-summary.types';

export const AGGREGATION_MAP: Record<Aggregation, AggregationValue> = {
  D: 'daily',
  W: 'weekly',
  M: 'monthly',
};

export const AGGREGATION_REVERSE_MAP: Record<AggregationValue, Aggregation> = {
  daily: 'D',
  weekly: 'W',
  monthly: 'M',
};
