import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { Motion } from '@/components/motion';
import { ChevronDownSVG, ChevronUpSVG } from '@/components/svg';

const minusVariants = {
  rest: {
    scaleY: 0,
    rotate: '90deg',
    duration: 0.5,
  },
  collapsed: {
    scaleY: 1,
    rotate: '0deg',
    duration: 0.5,
  },
};

const plusVariants = {
  rest: {
    scaleY: 1,
    duration: 0.5,
    rotate: '0deg',
  },
  collapsed: {
    scaleY: 0,
    rotate: '0deg',
    duration: 0.5,
  },
};

const CollapseIcon: FC = () => (
  <Div position="relative" width="1.2rem" height="1.2rem" display="flex">
    <Motion
      overflow="hidden"
      position="absolute"
      variants={minusVariants}
      display="flex"
    >
      <ChevronDownSVG maxHeight="1.2rem" maxWidth="1.2rem" width="100%" />
    </Motion>
    <Motion
      overflow="hidden"
      position="absolute"
      variants={plusVariants}
      display="flex"
    >
      <ChevronUpSVG maxHeight="1.5rem" maxWidth="1.5em" width="100%" />
    </Motion>
  </Div>
);

export default CollapseIcon;
