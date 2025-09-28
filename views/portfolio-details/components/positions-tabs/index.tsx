import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';

import { PortfolioTabsProps } from './positions-tabs.types';

const PositionsTabs: FC<PortfolioTabsProps> = ({ tab, setTab, tabs }) => {
  return (
    <Div
      mb="1rem"
      gap="1rem"
      width="100%"
      display="flex"
      justifyContent={['space-between', ['flex-start']]}
    >
      <Tabs tabs={tabs} setTab={setTab} tab={tab} />
    </Div>
  );
};

export default PositionsTabs;
