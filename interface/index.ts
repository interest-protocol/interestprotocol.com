import { AccountAddress } from '@aptos-labs/ts-sdk';
import { InterestCurvePool } from '@interest-protocol/interest-aptos-curve';
import { InterestV2Pool } from '@interest-protocol/interest-aptos-v2';

import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';

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
export interface PortfolioDetailsPageProps {
  address: string;
}

export type IV2PoolData = Omit<
  InterestV2Pool,
  'poolAddress' | 'metadataX' | 'metadataY' | 'balanceX' | 'balanceY'
>;

export type ICurvePoolData = Omit<
  InterestCurvePool,
  'address' | 'fas' | 'data' | 'isStable'
> &
  Omit<InterestCurvePool['data'], 'balances'>;

export type IPool = (
  | {
      algorithm: 'v2';
      poolExtraData?: IV2PoolData;
    }
  | {
      algorithm: 'curve';
      poolExtraData?: ICurvePoolData;
    }
) & {
  poolAddress: string;
  curve: 'volatile' | 'stable';
  poolMetadata?: AssetMetadata;
  balances?: ReadonlyArray<string>;
  tokensAddresses: ReadonlyArray<string>;
  tokensMetadata?: ReadonlyArray<AssetMetadata>;
};
