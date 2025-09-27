import { NextPage } from 'next';

import { SEO } from '@/components';
import NotFound from '@/views/not-found';

const NotFoundPage: NextPage = () => (
  <>
    <SEO />
    <NotFound />
  </>
);

export default NotFoundPage;
