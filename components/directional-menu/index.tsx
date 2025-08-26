import { Div } from '@stylin.js/elements';
import { FC, PropsWithChildren, useState } from 'react';

import { Motion } from '../motion';
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
      zIndex="2"
      width="100%"
      p="1.875rem"
      display="flex"
      position="fixed"
      onClick={onClose}
      minHeight="100vh"
      alignItems="stretch"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      backdropFilter="blur(10px)"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      justifyContent={isDirectionalRight ? 'flex-end' : 'flex-start'}
    >
      <Div
        display="flex"
        flexDirection={isDirectionalRight ? 'row-reverse' : 'row'}
      >
        <Motion
          bg="#121313"
          display="flex"
          overflowY="auto"
          border="1px solid"
          flexDirection="column"
          animate={{ x: '0rem' }}
          borderColor="#FFFFFF1A"
          justifyContent="space-between"
          onClick={(e) => e.stopPropagation()}
          p={isDirectionalRight ? 'unset' : '1.5rem'}
          exit={{ x: isDirectionalRight ? '20rem' : '-20rem' }}
          initial={{ x: isDirectionalRight ? '20rem' : '-20rem' }}
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
        </Motion>
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
