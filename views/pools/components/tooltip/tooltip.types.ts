interface TokenReward {
  symbol: string;
  amount: number;
  value: number;
  icon: string;
}

export interface TooltipProps {
  totalApr: number;
  fees: number;
  rewards: number;
  rewardsPerDay: TokenReward[];
}
