import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import unikey from 'unikey';

import HeaderInfo from '../../components/header-info';
import Filter from './components/filter';
import PoolsTabs from './components/pools-tabs';
import TimeToggle from './components/time-toggle';
import Tooltip from './components/tooltip';
import { headerData } from './pools.data';

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
            balance: 4916.4,
            valueUSD: 14863.59,
          },
          {
            symbol: 'USDT',
            balance: 6.4,
            valueUSD: 63.59,
          },
        ]}
      />

      <TimeToggle />
    </Div>
  );
};

export default PoolsContent;
