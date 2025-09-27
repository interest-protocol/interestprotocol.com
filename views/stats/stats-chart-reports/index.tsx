import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import StatsCharts from '../components/stats-chart';
import ChartTabs from '../components/stats-tabs/chart-tabs';

const StatsChartReports: FC = () => (
  <Div mb="1rem">
    <Div
      gap="1rem"
      width="100%"
      display={['none', 'none', 'grid', 'grid']}
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr']}
    >
      <StatsCharts />
    </Div>

    <ChartTabs />
  </Div>
);

export default StatsChartReports;
