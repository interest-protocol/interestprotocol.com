import useSWR from 'swr';

import { AggregationValue } from '../../pools/header-summary/pool-header-summary.types';

interface MetricItem {
  apr: string;
  farmApr: string;
  fees: string;
  revenue: string;
  timestamp: string;
  tvl: string;
  volume: string;
}

interface PoolsMetrics {
  total: number;
  totalPages: number;
  data: ReadonlyArray<MetricItem>;
}

const usePoolMetricsOvertime = (
  poolAddress: string,
  aggregation: AggregationValue = 'daily'
) =>
  useSWR<ReadonlyArray<MetricItem>>(
    ['usePoolMetricsOvertime', poolAddress, aggregation],
    () =>
      fetch(
        `https://api.interestlabs.io/v1/movement/mainnet/curve/metrics-overtime?poolId=${poolAddress}&limit=100&aggregation=${aggregation}`
      )
        .then((response) => response.json())
        .then((data) => (data as PoolsMetrics).data.toReversed())
  );

export default usePoolMetricsOvertime;
