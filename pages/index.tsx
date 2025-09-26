import { NextPage } from 'next';

import { SEO } from '@/components';
import Build from '@/views/build';

const HomePage: NextPage = () => (
  <>
    <SEO />
    <Build />
  </>
);

export default HomePage;
