import BigNumber from 'bignumber.js';

import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';

export type DepositToken = AssetMetadata & {
  value: string;
  valueBN: BigNumber;
};

export interface CreateDepositForm {
  tokens: ReadonlyArray<DepositToken>;
}
