import Head from 'next/head';
import { FC } from 'react';

import { SEOProps } from './seo.types';

const SEO: FC<SEOProps> = ({ title }) => (
  <Head>
    <title>{title} | Interest Protocol</title>
    <link rel="icon" type="image/x-icon" href="/icon.svg" />
  </Head>
);

export default SEO;
