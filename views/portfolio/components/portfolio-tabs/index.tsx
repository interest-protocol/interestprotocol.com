import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

import { PortfolioTabsProps } from './portfolio-tabs.types';

const PortfolioTabs: FC<PortfolioTabsProps> = ({ onGetTotal }) => {
  const { tab, setTab } = useTabState();

  return (
    <Tabs
      tab={tab}
      setTab={setTab}
      color="#B4C5FF33"
      total={onGetTotal}
      tabs={['Curve Pool', 'v3', 'Transactions']}
    />
  );
};

export default PortfolioTabs;
