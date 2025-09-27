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
      <Tabs
        tab={tab}
        setTab={setTab}
        width="11.125rem"
        height="2.1875rem"
        activeBg="#B4C5FF33"
        tabs={['TVL', 'Volume']}
        justifyContent="space-between"
      />

      <StatsCharts tab={tab} />
    </Div>
  );
};

export default ChartTabs;
