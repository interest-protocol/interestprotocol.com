import { NextPage } from 'next';

import { SEO } from '@/components';
import Stats from '@/views/stats';

const StatsPage: NextPage = () => (
  <>
    <SEO title="Swap" />
    <Stats />
  </>
);

export default StatsPage;
