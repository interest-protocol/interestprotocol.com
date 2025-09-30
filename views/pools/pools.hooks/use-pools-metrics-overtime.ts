import useSWR from 'swr';

import { POOLS } from '@/constants/pools';

import { AggregationValue } from '../header-summary/pool-header-summary.types';

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

const usePoolsMetricsOvertime = (aggregation: AggregationValue) => {
  const { data, isLoading, error } = useSWR(
    ['usePoolsMetricsOvertime', aggregation],
    async () => {
      const [firstPool, ...restPools] = await Promise.all(
        POOLS.map((pool) =>
          fetch(
            `https://api.interestlabs.io/v1/movement/mainnet/curve/metrics-overtime?poolId=${pool.poolAddress}&limit=100&aggregation=${aggregation}`
          )
            .then((response) => response.json())
            .then((data) => data as PoolsMetrics)
        )
      );

      const result = firstPool.data.map(
        ({ apr, farmApr, fees, revenue, timestamp, tvl, volume }, index) => ({
          timestamp,
          apr: restPools.reduce(
            (acc, curr) => acc + Number(curr.data[index].apr),
            Number(apr)
          ),
          farmApr: restPools.reduce(
            (acc, curr) => acc + Number(curr.data[index].farmApr),
            Number(farmApr)
          ),
          fees: restPools.reduce(
            (acc, curr) => acc + Number(curr.data[index].fees),
            Number(fees)
          ),
          revenue: restPools.reduce(
            (acc, curr) => acc + Number(curr.data[index].revenue),
            Number(revenue)
          ),
          tvl: restPools.reduce(
            (acc, curr) => acc + Number(curr.data[index].tvl),
            Number(tvl)
          ),
          volume: restPools.reduce(
            (acc, curr) => acc + Number(curr.data[index].volume),
            Number(volume)
          ),
        })
      );

      return result.toReversed();
    }
  );

  return { data, isLoading, error };
};

export default usePoolsMetricsOvertime;
