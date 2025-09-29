import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import CombinedChart from '@/components/combined-chart';

import usePoolsMetricsOvertime from '../../pools.hooks';
import { PoolsChartReportsProps } from './pools-chart-reports.types';

const PoolsChartReports: FC<PoolsChartReportsProps> = ({ aggregation }) => {
  const { data, isLoading } = usePoolsMetricsOvertime(aggregation);

  return (
    <Div width="100%" height="18.75rem">
      {!isLoading ? (
        <CombinedChart
          data={
            data?.map(({ timestamp, tvl, volume, fees }) => ({
              tvl,
              fees,
              volume,
              name: new Date(timestamp).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              }),
            })) ?? []
          }
          xDataKey="name"
          charts={{
            area: [
              {
                dataKey: 'tvl',
                color: '#9ba2ad',
              },
            ],
            bar: [
              {
                dataKey: 'fees',
                color: '#00c779',
              },
              {
                dataKey: 'volume',
                color: '#383cb2',
              },
            ],
          }}
        />
      ) : (
        <Skeleton width="100%" height="18.75rem" baseColor="#9CA3AF1A" />
      )}
    </Div>
  );
};

export default PoolsChartReports;
