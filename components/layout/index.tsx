import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { useResetTabs } from '@/hooks/use-reset-tabs';

import Header from './header';
import SwapBottomMenu from './menu-mobile/bottom-menu';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  useResetTabs();
  return (
    <Main
      flex="1"
      bg="#030712"
      minHeight="100vh"
      overflowY="auto"
      overflowX="hidden"
      position="relative"
      flexDirection="column"
      gridTemplateRows="auto 1fr"
      pb={['8rem', '8rem', '8rem', 'unset']}
      display={['flex', 'flex', 'flex', 'grid']}
      px={['1.5rem', '3rem']}
    >
      <Div maxWidth="1440px" mx="auto" width="100%">
        <Header />
        <Div pb={['8rem', '8rem', '8rem', 'unset']}>{children}</Div>
        <SwapBottomMenu />
      </Div>
    </Main>
  );
};

export default Layout;
