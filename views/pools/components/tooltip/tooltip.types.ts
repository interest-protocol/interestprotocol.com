interface TokenReward {
  symbol: string;
  balance: number;
  valueUSD: number;
}

export interface TooltipProps {
  fees: number;
  rewards: number;
  totalApr: number;
  rewardsPerDay: ReadonlyArray<TokenReward>;
}
