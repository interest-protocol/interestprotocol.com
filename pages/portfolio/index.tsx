import { NextPage } from 'next';

import { SEO } from '@/components';
import Portfolio from '@/views/portfolio';

const PortfolioPage: NextPage = () => (
  <>
    <SEO title="Portfolio" />
    <Portfolio />
  </>
);

export default PortfolioPage;
