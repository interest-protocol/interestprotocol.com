import { Global } from '@emotion/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ReactNode, StrictMode } from 'react';

import { GlobalStyles } from '@/styles';

const Provider = dynamic(() => import('@/components/provider'), {
  ssr: false,
});

const MyApp = ({ Component, pageProps }: AppProps<NextPage>): ReactNode => (
  <>
    <Head>
      <title>Movement</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
      />
    </Head>
    <Provider>
      <StrictMode>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </StrictMode>
    </Provider>
  </>
);

export default MyApp;
