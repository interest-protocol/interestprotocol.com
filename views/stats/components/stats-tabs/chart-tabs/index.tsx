import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';

import Tabs from '@/components/tabs';

import StatsCharts from '../../stats-chart';

const ChartTabs: FC = () => {
  const [chartTabs, setChartTabs] = useState(0);

  const toggleChart = (tabIndex: number) => {
    setChartTabs(tabIndex);
  };

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
          tab={chartTabs}
          setTab={toggleChart}
          color="#B4C5FF33"
          tabs={['TVL', 'Volume']}
        />
      </Div>
      <StatsCharts tab={chartTabs} />
    </Div>
  );
};

export default ChartTabs;
