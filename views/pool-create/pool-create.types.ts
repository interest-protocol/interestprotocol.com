import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';

export type PoolToken = AssetMetadata & {
  value: string;
  valueBN: BigNumber;
};
export interface CreatePoolForm {
  tokens: ReadonlyArray<PoolToken>;
  volatilityStrategyType: string;
}
