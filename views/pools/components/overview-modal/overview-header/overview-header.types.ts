import { AggregationValue } from '@/views/pools/header-summary/pool-header-summary.types';

import { OverviewModalProps } from '../overview-modal.types';

export interface OverviewHeaderProps extends OverviewModalProps {
  aggregation: AggregationValue;
  setAggregation: (aggregation: AggregationValue) => void;
}
