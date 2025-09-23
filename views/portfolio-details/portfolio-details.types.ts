import BigNumber from 'bignumber.js';

import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';

export type PortfolioDetailsToken = AssetMetadata & {
  value: string;
  valueBN: BigNumber;
};

export interface PortfolioDetailsFormProps {
  lpCoin: PortfolioDetailsToken;
  tokenList: ReadonlyArray<PortfolioDetailsToken>;
}
