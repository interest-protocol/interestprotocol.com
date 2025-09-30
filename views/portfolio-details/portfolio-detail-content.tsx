import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useTabState } from '@/hooks/use-tab-manager';

import Farm from '../components/farm';
import PoolDetailsHeader from './components/header';
import PositionsDetailsTabs from './components/portfolio-details-tabs';
import Position from './components/position';

const PortfolioDetailContent: FC = () => {
  const { tab } = useTabState();
  return (
    <Div
      width="100%"
      display="flex"
      flexDirection="column"
      gap={['1rem', '2rem']}
      mt={['1rem', '2.5rem']}
    >
      <Div
        gap="1rem"
        display="flex"
        flexDirection={['column-reverse', 'column']}
      >
        <PoolDetailsHeader />
        <PositionsDetailsTabs />
      </Div>

      {[<Position key={v4()} />, <Farm key={v4()} />][tab]}
    </Div>
  );
};

export default PortfolioDetailContent;
