import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Button } from '../button';
import { TabsProps } from './tabs.types';

const Tabs: FC<TabsProps> = ({
  width,
  height,
  setTab,
  tab,
  tabs,
  activeBg = '#9CA3AF1A',
  justifyContent = 'flex-start',
}) => (
  <Div gap="0.5rem" display="flex" justifyContent={justifyContent}>
    {tabs.map((text, index) => (
      <Button
        key={v4()}
        px="1rem"
        py="0.5rem"
        border="none"
        width={width}
        height={height}
        display="flex"
        fontSize="1rem"
        cursor="pointer"
        variant="outline"
        alignItems="center"
        lineHeight="1.7rem"
        borderRadius="9999rem"
        justifyContent="center"
        onClick={() => setTab(index)}
        nHover={{ color: '#B4C5FF' }}
        fontWeight={tab === index ? '400' : '500'}
        bg={tab === index ? activeBg : 'transparent'}
        color={tab === index ? '#FFFFFF' : '#9CA3AF'}
      >
        {text}
      </Button>
    ))}
  </Div>
);

export default Tabs;
