export interface RewardsModalProps {
  totalEarnings: string;
  rewardsList: ReadonlyArray<{ amount: string; symbol: string }>;
  rewardFee: string;
  claimingFee: string;
}
