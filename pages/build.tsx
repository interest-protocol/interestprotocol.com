import { NextPage } from 'next';

import { SEO } from '@/components';
import Build from '@/views/build';

const BuildPage: NextPage = () => (
  <>
    <SEO />
    <Build />
  </>
);

export default BuildPage;
