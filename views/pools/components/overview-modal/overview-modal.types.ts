export interface PoolData {
  timestamp: number;
  volume?: number;
  liquidity?: number;
}

export interface OverviewModalProps {
  lp: string;
  token: string;
  value: number;
  poolVolume: PoolData[];
  poolLiquidity: PoolData[];
}
