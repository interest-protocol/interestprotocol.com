export interface PoolNameProps {
  name: string;
  iconURL?: string;
  tags: ReadonlyArray<'earn' | 'stable' | 'volatile' | 'curve'>;
}

export type TAG_TYPE = 'curve' | 'stable' | 'earn' | 'success' | 'staked';

export interface TagProps {
  type: TAG_TYPE;
  label?: string;
  small?: boolean;
  onClick?: () => void;
}
