import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import PortfolioCurvePools from './portfolio-curve-pools';
import PortfolioSummary from './portfolio-summary';

const PortfolioContent: FC = () => {
  return (
    <Div
      pb="5rem"
      mt="2.5rem"
      width="100%"
      display="flex"
      flexDirection="column"
      gap={['1rem', '1rem', '1rem', '2rem']}
      px={['unset', 'unset', 'unset', '3.5rem']}
    >
      <PortfolioSummary />
      <Div display="flex" flexDirection="column" gap="1rem">
        <PortfolioCurvePools />
      </Div>
    </Div>
  );
};

export default PortfolioContent;
