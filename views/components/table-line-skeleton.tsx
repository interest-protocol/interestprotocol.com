import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const TableMobileLineSkeleton: FC = () => {
  return (
    <Div display="flex" justifyContent="space-between" alignItems="center">
      <Skeleton width={60} height={15} />
      <Skeleton width={80} height={15} />
    </Div>
  );
};

export default TableMobileLineSkeleton;
