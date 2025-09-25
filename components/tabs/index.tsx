import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Button } from '../button';
import { TabsProps } from './tabs.types';

const Tabs: FC<TabsProps> = ({ setTab, tab, tabs }) => (
  <Div gap="0.5rem" display="flex" flexWrap="wrap">
    {tabs.map((text, index) => (
      <Button
        px="1rem"
        key={v4()}
        py="0.5rem"
        border="none"
        fontSize="1rem"
        cursor="pointer"
        fontWeight={tab === index ? '400' : '500'}
        variant="outline"
        lineHeight="1.7rem"
        borderRadius="9999rem"
        onClick={() => setTab(index)}
        color={tab === index ? '#FFFFFF' : '#9CA3AF'}
        nHover={{
          color: '#B4C5FF',
        }}
        bg={tab === index ? '#9CA3AF1A' : 'transparent'}
      >
        {text}
      </Button>
    ))}
  </Div>
);

export default Tabs;
