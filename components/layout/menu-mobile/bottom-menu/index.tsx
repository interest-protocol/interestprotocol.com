import { Div } from '@stylin.js/elements';

import BottomNavList from './bottom-nav-list';

const SwapBottomMenu = () => {
  return (
    <Div
      left="0"
      zIndex="5999"
      bottom="0"
      width="100vw"
      overflow="hidden"
      position="fixed"
      bg="#9CA3AF1A"
      flexDirection="column"
      display={['flex', 'flex', 'flex', 'none', 'none']}
      backdropFilter="blur(0.5rem)"
      WebkitBackdropFilter="blur(0.5rem)"
    >
      <BottomNavList />
    </Div>
  );
};

export default SwapBottomMenu;
