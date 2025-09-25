import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import StatsChartTVLReport from './tvl-chart-report';
import StatsChartVolumeReport from './volume-chart-report';

const StatsChartReports: FC = () => (
  <Div
    mb="1rem"
    gap="1rem"
    width="100%"
    display="grid"
    gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
  >
    <StatsChartTVLReport />
    <StatsChartVolumeReport />
  </Div>
);

export default StatsChartReports;
