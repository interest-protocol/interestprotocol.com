import { FC } from 'react';
import Swap from './components/swap';
import { Div } from '@stylin.js/elements';

const SwapContent: FC = () => {

  return (
    <Div height="100%" display="flex">
      <Div
        gap="l"
        mx="auto"
        display="flex"
        borderRadius="l"
        alignContent="center"
        justifyContent="center"
        px={['2xs', 'xl', 'xl', '7xl']}
        width={['100%', '100%', '100%', '39.75rem']}
      >
        <Swap />
      </Div>
    </Div>
  );
};

export default SwapContent;
