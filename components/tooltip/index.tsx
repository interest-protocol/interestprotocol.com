import { Div } from '@stylin.js/elements';
import { FC, PropsWithChildren, useState } from 'react';

import { Motion } from '../motion';
import { TooltipProps } from './tooltip.types';

export const TooltipWrapper: FC<PropsWithChildren<TooltipProps>> = ({
  children,
  tooltipContent,
  ...props
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Div
      cursor="pointer"
      position="relative"
      onMouseEnter={() => {
        setToggle(true);
      }}
      onMouseLeave={() => {
        setToggle(false);
      }}
      aria-label="tooltipContainer"
      {...props}
    >
      {children}
      {toggle && (
        <Motion
          layout
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: 1,
          }}
          top="0"
          left="50%"
          role="tooltip"
          position="absolute"
          borderRadius=".25rem"
          transform="translate(-50%, -100%)"
        >
          <Div p=".5rem">{tooltipContent}</Div>
          <Div
            bg="inherit"
            width=".375rem"
            height=".375rem"
            bottom={'-0.2rem'}
            position="absolute"
            transform="translate(-50%,0) rotate(45deg)"
          />
        </Motion>
      )}
    </Div>
  );
};

export type { TooltipProps };
