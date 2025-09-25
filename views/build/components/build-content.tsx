import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import HeroBackground from '@/views/build/components/star-background';

import Header from './header';
import Hero from './hero';

const BuildContent: FC = () => {
  return (
    <Div
      width="100%"
      bg="#111113"
      display="flex"
      minHeight="100vh"
      flexDirection="column"
    >
      <HeroBackground />
      <Header />
      <Hero />
    </Div>
  );
};

export default BuildContent;
