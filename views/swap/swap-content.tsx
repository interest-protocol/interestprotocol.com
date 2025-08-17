import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { useTabState } from '@/hooks/use-tab-manager';

import Swap from './components/swap';
import SwapTabs from './components/swap-tabs';

const SwapContent: FC = () => {
  const { tab } = useTabState();

  return (
    <Div height="100%" display="flex">
      <Div
        gap="1.25rem"
        mx="auto"
        display="flex"
        borderRadius="l"
        alignContent="center"
        justifyContent="center"
        px={['0.25rem', '1.5rem', '1.5rem', '3rem']}
        width={['100%', '100%', '100%', '39.75rem']}
      >
        <Div display="flex" flexDirection="column">
          <SwapTabs />
          {[<Swap key={unikey()} />][tab]}
        </Div>
      </Div>
    </Div>
  );
};

export default SwapContent;
