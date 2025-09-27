import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useTabState } from '@/hooks/use-tab-manager';

import Deposit from './components/deposit';
import PoolDetailsHeader from './components/header';
import Info from './components/info';
import PositionsTabs from './components/positions-tabs';
import Withdraw from './components/withdraw';

const PortfolioDetailContent: FC = () => {
  const { tab } = useTabState();
  return (
    <Div
      mt="2.5rem"
      width="100%"
      display="flex"
      flexDirection="column"
      gap={['1rem', '2rem']}
    >
      <PoolDetailsHeader />
      <Div
        gap="2.5rem"
        display="grid"
        gridTemplateColumns={['1fr', '1fr', '1fr', '2fr 1fr']}
      >
        <Info />
        <Div gap="0.75rem" display="flex" flexDirection="column">
          <PositionsTabs />
          {[<Deposit key={v4()} />, <Withdraw key={v4()} />][tab]}
        </Div>
      </Div>
    </Div>
  );
};

export default PortfolioDetailContent;
