import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Header from './header';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main bg="#030712" minHeight="100vh">
    <Header />
    <Div
      px={['1rem', '1rem', '1rem', '1.5rem']}
      pb={['8rem', '8rem', '8rem', 'unset']}
    >
      {children}
    </Div>
  </Main>
);

export default Layout;
