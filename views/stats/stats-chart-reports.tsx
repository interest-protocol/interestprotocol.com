import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import HeadInfo from './components/head-info';

const StatsChartReports: FC = () => (
  <>
    <Div
      mb="1rem"
      gap="1rem"
      width="100%"
      display="grid"
      gridTemplateColumns={['1fr', '1fr 1fr']}
    >
      <Div display="flex" flexDirection="column" gap="1rem">
        <HeadInfo
          name="IPX TVL"
          value={312323.12}
          date="2025-08-22T05:42:10.123Z"
        />
        <Skeleton width="100%" height="18.75rem" baseColor="#9CA3AF1A" />
      </Div>

      <Div display="flex" flexDirection="column" gap="1rem">
        <Div display="flex" justifyContent="space-between">
          <HeadInfo
            symbol="USD"
            name="IPX TVL"
            value={312323.12}
            date="2025-08-22T05:42:10.123Z"
          />
        </Div>
        <Skeleton width="100%" height="18.75rem" baseColor="#9CA3AF1A" />
      </Div>
    </Div>
  </>
);

export default StatsChartReports;
