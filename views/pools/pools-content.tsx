import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import unikey from 'unikey';

import Filter from './components/filter';
import HeaderInfo from './components/header-info';
import { headerData } from './components/header-info/headerInfo.data';
import PoolsTabs from './components/pools-tabs';

const PoolsContent: FC = () => {
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
        {headerData.map((info) => (
          <HeaderInfo key={unikey()} {...info} />
        ))}
        <Filter />
      </Div>
      <Skeleton width="100%" height="18.75rem" baseColor="#9CA3AF1A" />

      <PoolsTabs />
    </Div>
  );
};

export default PoolsContent;
