import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import SwapBottomMenu from '@/components/layout/bottom-menu';

import ErrorBoundary from '../error-boundary';
import FloatingButtons from './floating-buttons';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  title,
  children,
  background,
}) => (
  <ErrorBoundary>
    <Box
      flex="1"
      as="aside"
      height="100vh"
      overflowY="auto"
      overflowX="hidden"
      position="relative"
      flexDirection="column"
      gridTemplateRows="auto 1fr"
      pb={['8rem', '8rem', '8rem', 'unset']}
      bg="#030712"
      display={['flex', 'flex', 'flex', 'grid']}
    >
      <Header />
      <Box
        mb="m"
        mx="auto"
        position="relative"
        borderRadius="1rem"
        width={['95%', '95%', '95%', '98%', '98%']}
        mt={['3rem', '3rem', '3rem', '1rem', '1rem']}
      >
        {background}
        <Box
          flex="1"
          py="2xl"
          mb="1rem"
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            m="0"
            mt="unset"
            width="100%"
            height="100%"
            display="flex"
            variant="container"
            flexDirection="column"
            px={['m', 'l', 'l', 'xl']}
          >
            <Box
              flex="1"
              as="main"
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
            >
              <Box
                flex="1"
                pb="2rem"
                width="100%"
                display="flex"
                flexDirection="column"
              >
                {title && (
                  <Typography
                    my="3rem"
                    size="medium"
                    color="onSurface"
                    variant="display"
                    textAlign="center"
                  >
                    {title}
                  </Typography>
                )}
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
        <FloatingButtons />
      </Box>
    </Box>
    <SwapBottomMenu />
  </ErrorBoundary>
);

export default Layout;
