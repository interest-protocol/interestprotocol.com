import useSWR from 'swr';

interface MetricsSummary {
  tvl: string;
  apr: string;
  farmApr: string;
  fees: string;
  fees1D: string;
  fees7D: string;
  fees30D: string;
  volume: string;
  volume1D: string;
  volume7D: string;
  volume30D: string;
  revenue: string;
  revenue1D: string;
  revenue7D: string;
  revenue30D: string;
}

export interface PoolMetrics {
  poolId: string;
  isStable: boolean;
  rewards: [string];
  coins: [string, string];
  metrics: MetricsSummary;
  rewardsSymbols: [string];
  symbols: [string, string];
}

interface PoolsMetrics {
  total: number;
  totalPages: number;
  summary: MetricsSummary;
  data: ReadonlyArray<PoolMetrics>;
}

const usePoolsMetrics = () =>
  useSWR<PoolsMetrics>([usePoolsMetrics.name], async () =>
    fetch(`https://api.interestlabs.io/v1/movement/mainnet/curve/metrics`).then(
      (res) => res.json?.()
    )
  );

export default usePoolsMetrics;
