export interface MetricItemProps {
  tvl: string;
  tvl1D: string;
  tvl7D: string;
  tvl30D: string;
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

export interface Metric {
  coins: ReadonlyArray<string>;
  poolId: string;
  balances: ReadonlyArray<string>;
  symbols: ReadonlyArray<string>;
  adminFee: number;
  isStable: boolean;
  metrics: MetricItemProps;
}

export interface IAPIMetrics {
  summary: MetricItemProps;
  totalPages: number;
  data: ReadonlyArray<Metric>;
}
