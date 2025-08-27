export interface TokenInfo {
  value: string;
  symbol: string;
  iconUrl: string;
}
export interface RewardsProps {
  claimingFee: string;
  pairToken: readonly [TokenInfo, TokenInfo];
}
