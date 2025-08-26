import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Breadcrumb from './components/breadcrumb';
import Info from './components/info';

const PortfolioPositionsContent: FC = () => {
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

      <Div display="grid" gridTemplateColumns={['1fr', '1fr 1fr']}>
        <Info />
      </Div>
    </Div>
  );
};

export default PortfolioPositionsContent;
