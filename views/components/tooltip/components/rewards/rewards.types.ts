export interface RewardToken {
  symbol: string;
  balance: number;
  valueUSD: number;
}

export interface RewardsProps {
  tokens: ReadonlyArray<RewardToken>;
}
