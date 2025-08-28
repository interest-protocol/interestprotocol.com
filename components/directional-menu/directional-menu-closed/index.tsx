import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { CaretLeftSVG, CaretRightSVG } from '@/components/svg';

import { IDirectionalClosedProps } from './directional-menu-closed.types';

const DirectionalMenuClosed: FC<IDirectionalClosedProps> = ({
  onClose,
  setIsHovered,
  isDirectionalRight,
}) => {
  return (
    <Div
      p="1rem"
      width="3.5rem"
      height="100%"
      display="block"
      nHover={{
        bg: '#12131380',
        borderRadius: isDirectionalRight
          ? '0.75rem 0 0 0.75rem'
          : '0 0.75rem 0.75rem 0',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isDirectionalRight ? (
        <CaretLeftSVG
          maxWidth="20"
          maxHeight="20"
          cursor="pointer"
          onClick={onClose}
        />
      ) : (
        <CaretRightSVG
          maxWidth="20"
          maxHeight="20"
          cursor="pointer"
          onClick={onClose}
        />
      )}
    </Div>
  );
};

export default DirectionalMenuClosed;
