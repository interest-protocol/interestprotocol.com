import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import PoolNameSkeletonMobile from '../pool-name-skeleton/pool-name-skeleton-mobile';
import TableMobileLineSkeleton from '../table-line-skeleton';
import { TableMobileSkeletonProps } from './table-mobile-skeleton.types';

const TableMobileSkeleton: FC<TableMobileSkeletonProps> = ({
  linesCount = 3,
  buttons = 2,
  showPoolName = true,
}) => {
  return (
    <Div
      p="1rem"
      gap="0.5rem"
      borderStyle="solid"
      borderColor="#1F2937"
      flexDirection="column"
      borderWidth="0px 0px 1px 0px"
      display={['flex', 'none', 'none', 'none']}
    >
      {showPoolName && <PoolNameSkeletonMobile />}

      {Array.from({ length: linesCount }).map(() => (
        <TableMobileLineSkeleton key={v4()} />
      ))}

      {buttons > 0 && (
        <Div mt="0.5rem" display="flex" gap="0.5rem" width="100%">
          {buttons === 1 ? (
            <Div flex="1">
              <Skeleton height={40} borderRadius="0.5rem" />
            </Div>
          ) : (
            <>
              <Div flex="1">
                <Skeleton height={40} borderRadius="0.5rem" />
              </Div>
              <Div flex="1">
                <Skeleton height={40} borderRadius="0.5rem" />
              </Div>
            </>
          )}
        </Div>
      )}
    </Div>
  );
};

export default TableMobileSkeleton;
