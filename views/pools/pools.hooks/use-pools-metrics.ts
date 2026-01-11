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

export const ZERO_METRICS: MetricsSummary = {
  tvl: '0',
  apr: '0',
  farmApr: '0',
  fees: '0',
  fees1D: '0',
  fees7D: '0',
  fees30D: '0',
  volume: '0',
  volume1D: '0',
  volume7D: '0',
  volume30D: '0',
  revenue: '0',
  revenue1D: '0',
  revenue7D: '0',
  revenue30D: '0',
};

const emptyPoolsMetrics: PoolsMetrics = {
  total: 0,
  totalPages: 0,
  summary: ZERO_METRICS,
  data: [],
};

const usePoolsMetrics = () =>
  useSWR<PoolsMetrics>([usePoolsMetrics.name], async () => {
    try {
      const res = await fetch(
        'https://api.interestlabs.io/v1/movement/mainnet/curve/metrics'
      );

      if (!res.ok) {
        throw new Error('Request failed');
      }

      const data = await res.json();

      return {
        total: data?.total ?? 0,
        totalPages: data?.totalPages ?? 0,
        summary: {
          ...ZERO_METRICS,
          ...data?.summary,
        },
        data: data?.data ?? [],
      };
    } catch (error) {
      return emptyPoolsMetrics;
    }
  });

export default usePoolsMetrics;
