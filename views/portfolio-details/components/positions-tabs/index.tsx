import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';

import { PortfolioTabsProps } from './positions-tabs.types';

const PositionsTabs: FC<PortfolioTabsProps> = ({ tab, setTab, tabs }) => {
  return (
    <Div mb="1rem" display="flex">
      <Tabs tabs={tabs} setTab={setTab} tab={tab} />
    </Div>
  );
};

export default PositionsTabs;
