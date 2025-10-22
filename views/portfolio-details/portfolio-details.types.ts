import BigNumber from 'bignumber.js';

import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';

export type PortfolioDetailsToken = AssetMetadata & {
  value: string;
  valueBN: BigNumber;
};

export interface PortfolioDetailsFormProps {
  balanced: boolean;
  poolAddress: string;
  lpCoin: PortfolioDetailsToken;
  selectedCoinIndex: ReadonlyArray<number>;
  tokenList: ReadonlyArray<PortfolioDetailsToken>;
  ratio: ReadonlyArray<number>;
  tvl?: string;
}
