import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import StatsChartReports from './stats-chart-reports';
import StatsTableReports from './stats-table-report';

const StatsContent: FC = () => (
  <Div
    width="100%"
    display="flex"
    flexDirection="column"
    mt={['1.5rem', '2.5rem']}
  >
    <StatsChartReports />
    <StatsTableReports />
  </Div>
);

export default StatsContent;
