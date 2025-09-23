interface PairToken {
  symbol: string;
  value: number;
  percent: number;
  icon: string;
}

export interface PoolBalanceProps {
  pairTokens: PairToken[];
}
