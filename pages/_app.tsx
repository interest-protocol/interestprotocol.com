import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { StrictMode } from 'react';

import { GlobalStyles } from '@/styles';

const Provider = dynamic(() => import('@/components/provider'), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <StrictMode>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </StrictMode>
  </Provider>
);

export default App;
