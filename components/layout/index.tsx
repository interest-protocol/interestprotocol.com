import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Header from './header';
import SwapBottomMenu from './menu-mobile/bottom-menu';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main bg="#030712" minHeight="100vh">
    <Div
      flex="1"
      height="100vh"
      overflowY="auto"
      overflowX="hidden"
      position="relative"
      flexDirection="column"
      gridTemplateRows="auto 1fr"
      pb={['8rem', '8rem', '8rem', 'unset']}
      display={['flex', 'flex', 'flex', 'grid']}
      px={['1.5rem', '3rem']}
    >
      <Header />
      <Div pb={['8rem', '8rem', '8rem', 'unset']}>{children}</Div>
    </Div>
    <SwapBottomMenu />
  </Main>
);

export default Layout;
