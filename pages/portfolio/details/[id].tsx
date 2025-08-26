import { NextPage } from 'next';

import { SEO } from '@/components';
import PortfolioPositions from '@/views/portfolio/positions';

const PortfolioPositionsPage: NextPage = () => (
  <>
    <SEO title="Portfolio Positions" />
    <PortfolioPositions />
  </>
);

export default PortfolioPositionsPage;
