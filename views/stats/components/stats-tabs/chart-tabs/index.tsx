import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

import StatsCharts from '../../stats-chart';

const ChartTabs: FC = () => {
  const { tab, setTab } = useTabState();

  return (
    <Div
      mb="1rem"
      gap="1rem"
      width="100%"
      flexDirection="column"
      display={['flex', 'flex', 'none', 'none']}
    >
      <Div width="100%" display="flex" justifyContent="space-between">
        <Tabs
          tab={tab}
          setTab={setTab}
          color="#B4C5FF33"
          tabs={['TVL', 'Volume']}
        />
      </Div>
      <StatsCharts tab={tab} />
    </Div>
  );
};

export default ChartTabs;
