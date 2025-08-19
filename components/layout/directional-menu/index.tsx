import { Div } from '@stylin.js/elements';
import { FC, PropsWithChildren, useState } from 'react';

import { Motion } from '@/components';

import { IDirectionalMenuProps } from './directional-menu.types';
import DirectionalMenuClosed from './directional-menu-closed';

const DirectionalMenu: FC<PropsWithChildren<IDirectionalMenuProps>> = ({
  onClose,
  children,
  isDirectionalRight,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Motion
      layout
      top="0"
      left="0"
      zIndex="9"
      width="100%"
      px="1.875rem"
      display="flex"
      position="fixed"
      onClick={onClose}
      minHeight="100vh"
      flexDirection="column"
      justifyContent="center"
      backdropFilter="blur(10px)"
      exit={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      alignItems={isDirectionalRight ? 'end' : 'start'}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      initial={{ opacity: 0, x: isDirectionalRight ? 20 : -20 }}
    >
      <Div
        display="flex"
        flexDirection={isDirectionalRight ? 'row-reverse' : 'row'}
        width={['100%', '100%', '100%', isDirectionalRight ? '28rem' : '18rem']}
        height="93vh"
      >
        <Div
          p={isDirectionalRight ? 'unset' : '1.5rem'}
          bg="#121313"
          display="flex"
          overflowY="auto"
          border="1px solid"
          flexDirection="column"
          borderColor="#FFFFFF1A"
          justifyContent="space-between"
          onClick={(e) => e.stopPropagation()}
          width={[
            '90%',
            '90%',
            '90%',
            isDirectionalRight ? '28rem' : '14.5rem',
          ]}
          borderRadius={
            isHovered
              ? isDirectionalRight
                ? '0 0.75rem  0.75rem 0'
                : '0.75rem 0  0 0.75rem'
              : '0.75rem'
          }
        >
          {children}
        </Div>
        <DirectionalMenuClosed
          onClose={onClose}
          setIsHovered={setIsHovered}
          isDirectionalRight={isDirectionalRight}
        />
      </Div>
    </Motion>
  );
};

export default DirectionalMenu;
