export interface PoolData {
  timestamp: number;
  volume?: number;
  liquidity?: number;
}

export interface OverviewModalProps {
  apr?: string;
  volume?: string;
  tvl?: string;
  fees?: string;
  address: string;
  symbols?: ReadonlyArray<string>;
  tokensAddresses: ReadonlyArray<string>;
}
