export interface TokenAmountProps {
  symbol: string;
  value: number;
  iconUrl: string;
}

export interface TokenPairProps {
  left: TokenAmountProps;
  right: TokenAmountProps;
}
