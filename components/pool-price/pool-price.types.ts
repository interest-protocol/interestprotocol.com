export interface TokenPair {
  tokenA: string;
  tokenB: string;
}
export interface PoolPriceProps {
  tokenPair: TokenPair;
  priceTokenPair: number;
  poolTokenPriceUSD: number;
  isLoading: boolean;
}
