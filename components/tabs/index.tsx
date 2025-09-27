import { FC } from 'react';
import { v4 } from 'uuid';

import { Button } from '../button';
import { TabsProps } from './tabs.types';

const Tabs: FC<TabsProps> = ({ setTab, tab, tabs, color }) => (
  <>
    {tabs.map((text, index) => (
      <Button
        px="1rem"
        key={v4()}
        py="0.5rem"
        display="flex"
        border="none"
        fontSize="1rem"
        cursor="pointer"
        variant="outline"
        lineHeight="1.7rem"
        borderRadius="9999rem"
        justifyContent="center"
        onClick={() => setTab(index)}
        width={['100%', '100%', '100%', 'unset']}
        fontWeight={tab === index ? '400' : '500'}
        color={tab === index ? '#FFFFFF' : '#9CA3AF'}
        nHover={{
          color: '#B4C5FF',
        }}
        bg={tab === index ? color || '#9CA3AF1A' : 'transparent'}
      >
        {text}
      </Button>
    ))}
  </>
);

export default Tabs;
