import { Div, P } from '@stylin.js/elements';
import { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import CombinedChart from '@/components/combined-chart';
import Filter from '@/components/filter';
import { formatDate } from '@/utils/date';
import {
  AGGREGATION_MAP,
  AGGREGATION_REVERSE_MAP,
} from '@/views/pools/header-summary/header-summary.data';
import {
  Aggregation,
  AggregationValue,
} from '@/views/pools/header-summary/pool-header-summary.types';
import usePoolsMetricsOvertime from '@/views/pools/pools.hooks/use-pools-metrics-overtime';

import HeadInfo from '../components/head-info';

const StatsChartTVLReport: FC = () => {
  const [aggregation, setAggregation] = useState<AggregationValue>('daily');
  const { data, isLoading } = usePoolsMetricsOvertime(aggregation);

  return (
    <Div
      p="1rem"
      gap="0.625rem"
      display="flex"
      bg="#9CA3AF0D"
      borderRadius="0.5rem"
      flexDirection="column"
      border="1px solid #1F2937"
    >
      <Div display="flex" justifyContent="space-between" alignItems="center">
        <HeadInfo name="IPX TVL" value={312323.12} isLoading={isLoading} />
        <Div
          gap="0.5rem"
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
        >
          <Filter
            width="10.4375rem"
            justifyContent="space-between"
            options={['D', 'W', 'M']}
            interval={AGGREGATION_REVERSE_MAP[aggregation]}
            setInterval={(value) =>
              setAggregation(AGGREGATION_MAP[value as Aggregation])
            }
          />

          <P color="#9CA3AF" fontWeight={400} fontSize="0.75rem">
            {isLoading ? (
              <Skeleton width={80} height={12} />
            ) : (
              formatDate('2025-08-22T05:42:10.123Z')
            )}
          </P>
        </Div>
      </Div>

      <Div width="100%" height="18.75rem">
        {!isLoading ? (
          <CombinedChart
            xDataKey="date"
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
              ],
            }}
            data={
              data?.map(({ timestamp, tvl, fees }) => ({
                tvl,
                fees,
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
    </Div>
  );
};

export default StatsChartTVLReport;
