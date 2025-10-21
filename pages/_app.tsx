import 'react-loading-skeleton/dist/skeleton.css';

import { Global } from '@emotion/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode, StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';

import ModalProvider from '@/components/modal-provider';
import { INDEXER_URL, Network, RPC_URL, TOAST_DURATION } from '@/constants';
import { useResetTabs } from '@/hooks/use-reset-tabs';
import { AptosProvider } from '@/lib/aptos-provider';
import { GlobalStyles } from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps<NextPage>): ReactNode => {
  useResetTabs();

  return (
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
      </SkeletonTheme>
    </AptosProvider>
  );
};

export default MyApp;
