export interface RewardToken {
  symbol: string;
  amount: number;
  value: number;
}

export interface RewardsProps {
  tokens: RewardToken[];
}
