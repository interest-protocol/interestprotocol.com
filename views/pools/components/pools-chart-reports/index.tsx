import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import CombinedChart from '@/components/combined-chart';

import usePoolsMetricsOvertime from '../../pools.hooks/use-pools-metrics-overtime';
import { PoolsChartReportsProps } from './pools-chart-reports.types';

const PoolsChartReports: FC<PoolsChartReportsProps> = ({ aggregation }) => {
  const { data, isLoading } = usePoolsMetricsOvertime(aggregation);

  return (
    <Div width="100%" height="18.75rem">
      {!isLoading ? (
        <CombinedChart
          xDataKey="date"
          charts={{
            area: [
              {
                label: 'TVL',
                dataKey: 'tvl',
                color: '#9ba2ad',
              },
            ],
            bar: [
              {
                label: 'Fees',
                dataKey: 'fees',
                color: '#00c779',
              },
              {
                label: 'Volume',
                dataKey: 'volume',
                color: '#383cb2',
              },
            ],
          }}
          data={
            data?.map(({ timestamp, tvl, volume, fees }) => ({
              tvl,
              fees,
              volume,
              date: new Date(timestamp).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              }),
            })) ?? []
          }
        />
      ) : (
        <Skeleton width="100%" height="18.75rem" baseColor="#9CA3AF1A" />
      )}
    </Div>
  );
};

export default PoolsChartReports;
