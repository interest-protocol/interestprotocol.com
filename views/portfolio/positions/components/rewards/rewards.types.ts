export interface TokenInfo {
  value: number;
  symbol: string;
  iconUrl: string;
}
export interface RewardsProps {
  claimingFee: string;
  pairToken: readonly [TokenInfo, TokenInfo];
}
