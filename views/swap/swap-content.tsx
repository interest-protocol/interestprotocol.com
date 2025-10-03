import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import Swap from './components/swap';
import SwapTabs from './components/swap-tabs';

const SwapContent: FC = () => {
  return (
    <Div display="flex" mt={['1rem', '6rem']}>
      <Div
        gap="1.25rem"
        mx="auto"
        display="flex"
        borderRadius="3rem"
        alignContent="center"
        justifyContent="center"
        width={['100%', '100%', '100%', '30rem']}
      >
        <Div display="flex" flexDirection="column">
          <SwapTabs />
          <Swap key={unikey()} />
        </Div>
      </Div>
    </Div>
  );
};

export default SwapContent;
