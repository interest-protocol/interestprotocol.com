import BigNumber from 'bignumber.js';

import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';

export type PoolToken = AssetMetadata & {
  value: string;
  valueBN: BigNumber;
};

export interface CreatePoolForm {
  error?: string | null;
  volatilityStrategyType: string;
  tokens: ReadonlyArray<PoolToken>;
}
export interface InputProps {
  index: number;
}
