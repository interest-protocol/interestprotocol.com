import { TAG_TYPE } from '@/components/tag/tag.types';

export interface PoolNameProps {
  name: string;
  iconURL?: string;
  tags: ReadonlyArray<{
    label?: string;
    type: TAG_TYPE;
  }>;
}
