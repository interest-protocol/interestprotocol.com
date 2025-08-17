import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import { GlobalStyles } from '@/styles';
import ModalProvider from '@/components/modal-provider';
import dynamic from 'next/dynamic';
import { StrictMode } from 'react';

const Provider = dynamic(() => import('@/components/provider'), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <StrictMode>
      <ModalProvider />
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </StrictMode>
  </Provider>
);

export default App;
