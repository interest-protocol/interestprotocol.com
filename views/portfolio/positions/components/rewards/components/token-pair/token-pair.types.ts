export interface TokenAmountProps {
  symbol: string;
  value: string;
  iconUrl: string;
}

export interface TokenPairProps {
  left: TokenAmountProps;
  right: TokenAmountProps;
}
