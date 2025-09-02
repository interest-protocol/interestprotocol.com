import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import unikey from 'unikey';

import Filter from './components/filter';
import HeaderInfo from './components/header-info';
import { headerData } from './components/header-info/headerInfo.data';
import PoolsTabs from './components/pools-tabs';
import Tooltip from './components/tooltip';

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

      <Tooltip
        totalApr={157.49}
        fees={110.13}
        rewards={47.36}
        rewardsPerDay={[
          {
            symbol: 'USDC',
            amount: 4916.4,
            value: 14863.59,
            icon: '/',
          },
          {
            symbol: 'USDT',
            amount: 6.4,
            value: 63.59,
            icon: '/',
          },
        ]}
      />
    </Div>
  );
};

export default PoolsContent;
