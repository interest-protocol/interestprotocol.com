import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CurvePools from './components/curve-pools';
import Transactions from './components/transactions';
import V3 from './components/v3';
import PortfolioSummary from './portfolio-summary';

const PortfolioContent: FC = () => {
  return (
    <Div
      mt="2.5rem"
      width="100%"
      display="flex"
      flexDirection="column"
      gap={['1rem', '2rem']}
      px={['unset', 'unset', 'unset', '5.5rem']}
    >
      <PortfolioSummary />
      <CurvePools />
      <V3 />
      <Transactions />
    </Div>
  );
};

export default PortfolioContent;
