import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { useTabState } from '@/hooks/use-tab-manager';

import Breadcrumb from './components/breadcrumb';
import Deposit from './components/deposit';
import Info from './components/info';
import PositionsTabs from './components/positions-tabs';
import Withdraw from './components/withdraw';

const PortfolioPositionsContent: FC = () => {
  const { tab } = useTabState();
  return (
    <Div
      mt="2.5rem"
      width="100%"
      display="flex"
      flexDirection="column"
      gap={['1rem', '2rem']}
      px={['1.5rem', '5.5rem']}
    >
      <Breadcrumb pools={['USDC', 'BTC']} lp="/no-coin.png" />

      <Div
        gap="2.5rem"
        display="grid"
        gridTemplateColumns={['1fr', '1fr 25.84rem']}
      >
        <Info />
        <Div gap="0.75rem" display="flex" flexDirection="column">
          <PositionsTabs />
          {[<Deposit key={unikey()} />, <Withdraw key={unikey()} />][tab]}
        </Div>
      </Div>
    </Div>
  );
};

export default PortfolioPositionsContent;
