import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import Table from '@/components/table';
import { useTabState } from '@/hooks/use-tab-manager';

import HeaderInfo from '../../components/header-info';
import Filter from './components/filter';
import PoolsTabs from './components/pools-tabs';
import {
  FEATURES_POOLS_DATA,
  FEATURES_POOLS_HEADER_DATA,
  HEADER_DATA,
  VERIFIED_POOLS_DATA,
  VERIFIED_POOLS_HEADER_DATA,
} from './pools.data';

const PoolsContent: FC = () => {
  const { tab } = useTabState();
  return (
    <Div
      gap="1rem"
      display="flex"
      flexDirection="column"
      mt={['1rem', '1rem', '1rem', '2.5rem']}
    >
      <Div
        gap="1rem"
        width="100%"
        display="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={['flex-start', 'flex-start', 'flex-start', 'end']}
      >
        {HEADER_DATA.map((info) => (
          <HeaderInfo key={v4()} {...info} />
        ))}
        <Filter />
      </Div>
      <Skeleton width="100%" height="18.75rem" baseColor="#9CA3AF1A" />

      <PoolsTabs />
      {
        [
          <Table
            key={v4()}
            rows={VERIFIED_POOLS_DATA}
            title={VERIFIED_POOLS_HEADER_DATA}
            gridTemplateColumns="repeat(6, 1fr)"
          />,
          <Table
            key={v4()}
            rows={FEATURES_POOLS_DATA}
            title={FEATURES_POOLS_HEADER_DATA}
            gridTemplateColumns="repeat(6, 1fr)"
          />,
        ][tab]
      }
    </Div>
  );
};

export default PoolsContent;
