import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const PoolNameSkeleton: FC = () => (
  <Div display="flex" gap="0.5rem" alignItems="center">
    <Skeleton circle width={40} height={40} />

    <Div gap="0.5rem" display="flex" flexDirection="column">
      <Skeleton width={100} height={14} />
      <Div display="flex" gap="0.25rem" alignItems="center">
        <Skeleton width={40} height={18} borderRadius="0.5rem" />
        <Skeleton width={50} height={18} borderRadius="0.5rem" />
        <Skeleton width={55} height={18} borderRadius="0.5rem" />
      </Div>
    </Div>
  </Div>
);

export default PoolNameSkeleton;
