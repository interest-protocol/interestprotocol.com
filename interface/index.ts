import { AccountAddress } from '@aptos-labs/ts-sdk';

export type BigNumberish = BigNumber | bigint | string | number;

export interface CoinBalance {
  type: string;
  balance: bigint;
}

export interface Token {
  type?: string;
  address: AccountAddress;
  decimals: number;
  iconUri: string;
  name: string;
  projectUri: string;
  symbol: string;
}

export interface TokenPrice {
  coin: string;
  base?: string;
  price: number;
  priceChange24HoursPercentage: number;
}
