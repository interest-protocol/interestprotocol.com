export interface PoolNameProps {
  name: string;
  iconURL?: string;
  tags: ReadonlyArray<'earn' | 'stable' | 'volatile' | 'curve'>;
}
