import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

const TableMobileSkeleton: FC = () => (
  <Div
    width="100%"
    bg="#030712"
    borderStyle="solid"
    flexDirection="column"
    borderRadius="0.5rem"
    borderColor="#1F2937"
    borderWidth="1px 1px 0px 1px"
    display={['flex', 'flex', 'flex', 'none']}
  >
    {[1, 2, 3].map(() => (
      <Div
        key={v4()}
        p="1rem"
        gap="0.5rem"
        display="flex"
        borderStyle="solid"
        flexDirection="column"
        borderColor="#1F2937"
        borderWidth="0px 0px 1px 0px"
      >
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="100%" height="1rem" />
      </Div>
    ))}
  </Div>
);

export default TableMobileSkeleton;
