import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useTabState } from '@/hooks/use-tab-manager';

import Farm from '../components/farm';
import PositionsDetailsTabs from './components/portfolio-details-tabs';
import Position from './components/position';

const PortfolioDetailContent: FC = () => {
  const { tab } = useTabState();

  return (
    <Div
      width="100%"
      mt={['1rem', '2.5rem']}
      display="flex"
      flexDirection="column"
      gap={['1rem', '2rem']}
    >
      <Div gap="1rem" flexDirection="column" display={['flex', 'none']}>
        <PositionsDetailsTabs />
        {[<Position key={v4()} />, <Farm key={v4()} />][tab]}
      </Div>

      <Div display={['none', 'flex']} flexDirection="column">
        <Position />
      </Div>
    </Div>
  );
};

export default PortfolioDetailContent;
