import { NextPage } from 'next';

import { SEO } from '@/components';
import StrategyView from '@/views/strategy';

const StrategyPage: NextPage = () => (
  <>
    <SEO pageTitle="Strategy" />
    <StrategyView />
  </>
);

export default StrategyPage;
