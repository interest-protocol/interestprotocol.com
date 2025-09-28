import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

import { PortfolioTabsProps } from './portfolio-tabs.types';

const PortfolioTabs: FC<PortfolioTabsProps> = ({ onGetTotal }) => {
  const { tab, setTab } = useTabState();

  return (
    <Div display="flex" flexWrap="wrap">
      <Tabs
        tab={tab}
        setTab={setTab}
        color="#B4C5FF33"
        total={onGetTotal}
        tabs={['Curve Pool', 'v3', 'Transactions']}
      />
    </Div>
  );
};

export default PortfolioTabs;
