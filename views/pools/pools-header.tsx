import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';

import PoolsChartReports from './components/pools-chart-reports';
import PoolHeaderSummary from './header-summary';
import { AggregationValue } from './header-summary/pool-header-summary.types';
import { HEADER_DATA } from './pools.data';

const PoolsHeader: FC = () => {
  const [aggregation, setAggregation] = useState<AggregationValue>('daily');

  return (
    <Div
      display="flex"
      p="1rem"
      gap="1rem"
      bg="#9CA3AF0D"
      borderRadius="0.5rem"
      flexDirection="column"
      border="1px solid #1F2937"
    >
      <PoolHeaderSummary
        data={HEADER_DATA}
        aggregation={aggregation}
        setAggregation={setAggregation}
      />
      <PoolsChartReports aggregation={aggregation} />
    </Div>
  );
};

export default PoolsHeader;
