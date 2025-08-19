import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { TabsProps } from './tabs.types';

const Tabs: FC<TabsProps> = ({ setTab, tab, tabs }) => (
  <Div gap="0.5rem" display="flex" flexWrap="wrap">
    {tabs.map((text, index) => (
      <Button
        py="0.5rem"
        px="1rem"
        key={unikey()}
        fontSize="1rem"
        cursor="pointer"
        fontWeight="400"
        lineHeight="1.7rem"
        fontFamily="Inter"
        borderRadius="9999rem"
        onClick={() => setTab(index)}
        color={tab === index ? '#FFFFFF' : '#9CA3AF'}
        border="none"
        bg={tab === index ? '#9CA3AF33' : 'transparent'}
      >
        {text}
      </Button>
    ))}
  </Div>
);

export default Tabs;
