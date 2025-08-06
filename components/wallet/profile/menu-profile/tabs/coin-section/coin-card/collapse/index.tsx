import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';

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
      <Box
        display="flex"
        height="3.5rem"
        cursor="pointer"
        alignItems="center"
        onClick={handleCollapseClick}
        justifyContent="space-between"
      >
        <Typography
          color="#fff"
          size="small"
          variant="label"
          fontWeight="500"
          fontFamily="Inter"
          fontSize="0.85rem"
          lineHeight="1.5rem"
          textTransform="uppercase"
        >
          {title}
        </Typography>
        <Motion
          display="flex"
          initial="rest"
          alignItems="center"
          color="#fff"
          animate={isExpanded ? 'rest' : 'collapsed'}
        >
          <CollapseIcon />
        </Motion>
      </Box>
      <Motion
        gap="xs"
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
