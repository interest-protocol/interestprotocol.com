import { Global } from '@emotion/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode, StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';

import ModalProvider from '@/components/modal-provider';
import { TOAST_DURATION } from '@/constants';
import { GlobalStyles } from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps<NextPage>): ReactNode => (
  <>
    <Head>
      <title>Movement</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
      />
    </Head>
    <StrictMode>
      <Global styles={GlobalStyles} />
      <ModalProvider />

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: TOAST_DURATION,
          style: {
            zIndex: 100,
            maxWidth: '20rem',
            overflow: 'hidden',
            position: 'relative',
            background: '#242C32',
            boxShadow:
              '0px 16px 24px 0px rgba(0, 0, 0, 0.14), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 8px 10px 0px rgba(0, 0, 0, 0.20)',
          },
        }}
      />
      <Component {...pageProps} />
    </StrictMode>
  </>
);

export default MyApp;
