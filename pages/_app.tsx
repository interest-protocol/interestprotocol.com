import 'react-loading-skeleton/dist/skeleton.css';

import { Global } from '@emotion/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode, StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';

import ModalProvider from '@/components/modal-provider';
import { INDEXER_URL, Network, RPC_URL, TOAST_DURATION } from '@/constants';
import { AptosProvider } from '@/lib/aptos-provider';
import { GlobalStyles } from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps<NextPage>): ReactNode => (
  <>
    <Head>
      <title>Interest Protocol</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
      />
    </Head>
    <AptosProvider
      defaultNetwork={Network.MAINNET}
      networks={[
        {
          network: Network.MAINNET,
          rpc: RPC_URL[Network.MAINNET],
          indexer: INDEXER_URL[Network.MAINNET],
        },
      ]}
    >
      <SkeletonTheme baseColor="#99BBFF28" highlightColor="#99BBFF14">
        <StrictMode>
          <Global styles={GlobalStyles} />
          <ModalProvider />
          <Toaster
            position="bottom-right"
            containerStyle={{
              zIndex: '999999',
            }}
            toastOptions={{
              duration: TOAST_DURATION,
              style: {
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
      </SkeletonTheme>
    </AptosProvider>
  </>
);

export default MyApp;
