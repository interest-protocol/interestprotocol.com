import 'react-loading-skeleton/dist/skeleton.css';

import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import ModalProvider from '@/components/modal-provider';
import { GlobalStyles } from '@/styles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ModalProvider />
    <Global styles={GlobalStyles} />
    <Component {...pageProps} />
  </>
);

export default App;
