import { IPool } from '@/interface';

export interface APRProps {
  isDesktop?: boolean;
}

export interface PoolDetailsProps {
  isV3?: boolean;
}

export interface PoolDetailsContextProps {
  pool: IPool;
  loading: boolean;
}
