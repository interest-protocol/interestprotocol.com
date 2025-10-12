import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const PoolNameSkeletonMobile: FC = () => (
  <Div
    display="flex"
    alignItems="center"
    gap="0.5rem"
    justifyContent="space-between"
  >
    <Div display="flex" gap="0.5rem" alignItems="center">
      <Skeleton circle width={40} height={40} />
      <Skeleton width={100} height={14} />
    </Div>

    <Div display="flex" gap="0.25rem" flexWrap="wrap">
      <Skeleton width={40} height={18} borderRadius="0.5rem" />
      <Skeleton width={50} height={18} borderRadius="0.5rem" />
      <Skeleton width={55} height={18} borderRadius="0.5rem" />
    </Div>
  </Div>
);

export default PoolNameSkeletonMobile;
