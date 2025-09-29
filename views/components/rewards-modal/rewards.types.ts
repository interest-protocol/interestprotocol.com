export interface RewardsModalProps {
  totalEarnings: string;
  rewardsList: ReadonlyArray<{ amount: string; symbol: string }>;
  rewardFee?: string;
  onClaim?: () => Promise<void>;
  claimingFee?: string;
}
