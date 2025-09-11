import { Div, P } from '@stylin.js/elements';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { Motion } from '@/components/motion';

import { CollapseProps } from './collapse.types';
import CollapseIcon from './collapse-icon';

const variants = {
  collapsed: {
    height: 'auto',
  },
  rest: { height: 0 },
};

const Collapse: FC<CollapseProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCollapseClick = () => setIsExpanded(not);

  return (
    <>
      <Div
        display="flex"
        height="3.5rem"
        cursor="pointer"
        alignItems="center"
        onClick={handleCollapseClick}
        justifyContent="space-between"
      >
        <P
          color="#fff"
          fontWeight="500"
          fontFamily="Inter"
          fontSize="0.85rem"
          lineHeight="1.5rem"
          textTransform="uppercase"
        >
          {title}
        </P>
        <Motion
          display="flex"
          initial="rest"
          alignItems="center"
          color="#fff"
          animate={isExpanded ? 'rest' : 'collapsed'}
        >
          <CollapseIcon />
        </Motion>
      </Div>
      <Motion
        gap="0.5rem"
        display="flex"
        initial="rest"
        overflow="hidden"
        variants={variants}
        flexDirection="column"
        animate={isExpanded ? 'collapsed' : 'rest'}
        mb={['10rem', '10rem', '10rem', '2rem']}
      >
        {children}
      </Motion>
    </>
  );
};

export default Collapse;
