import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';

import { PortfolioTabsProps } from './positions-tabs.types';

const PositionsTabs: FC<PortfolioTabsProps> = ({
  tab,
  setTab,
  tabs,
  total,
}) => {
  return (
    <Div display="flex" width="90%">
      <Tabs tabs={tabs} setTab={setTab} tab={tab} total={total} isShortSize />
    </Div>
  );
};

export default PositionsTabs;
