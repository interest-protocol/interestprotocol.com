import 'react-loading-skeleton/dist/skeleton.css';

import { Global } from '@emotion/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode, StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';

import ModalProvider from '@/components/modal-provider';
import { TOAST_DURATION } from '@/constants';
import { GlobalStyles } from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps<NextPage>): ReactNode => (
  <>
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
      <SkeletonTheme baseColor="#99BBFF28" highlightColor="#99BBFF14">
        <Component {...pageProps} />
      </SkeletonTheme>
    </StrictMode>
  </>
);

export default MyApp;
