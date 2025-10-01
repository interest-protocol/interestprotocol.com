import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import VolumeChart from '@/components/volume-chart';
import { formatDollars } from '@/utils';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';
import usePoolMetricsOvertime from '@/views/pool-details/pool-details.hooks/use-pool-metrics-overtime';
import usePoolsMetrics from '@/views/pools/pools.hooks/use-pools-metrics';

const Chart: FC = () => {
  const { pool } = usePoolDetailsContext();
  const { data: poolsMetrics } = usePoolsMetrics();
  const { data: poolsMetricsOvertime } = usePoolMetricsOvertime(
    pool.poolAddress
  );

  const poolMetrics = poolsMetrics?.data.find(
    (metric) => metric.poolId === pool.poolAddress
  );

  return (
    <>
      <Div display="flex" gap="0.25rem" flexDirection="column">
        <Div display="flex" alignItems="center" gap="0.25rem">
          <Span
            color="#FFFFFF"
            fontWeight="400"
            lineHeight="2rem"
            fontFamily="Inter"
            fontSize={['1,125rem', '1,125rem', '1,125rem', '1.5rem']}
          >
            {formatDollars(
              Number(poolMetrics?.metrics.volume ?? 0),
              6,
              'start'
            )}
          </Span>
          <Span
            fontWeight="400"
            color="#9CA3AF"
            lineHeight="1.25rem"
            fontSize={['0,75rem', '0,75rem', '0,75rem', '0.875rem']}
          >
            USD Volume
          </Span>
        </Div>
        <Span
          fontWeight="400"
          color="#9CA3AF"
          lineHeight="1.25rem"
          fontSize={['0,75rem', '0,75rem', '0,75rem', '0.875rem']}
        >
          All time
        </Span>
      </Div>
      <Div width="100%" height={['7.4rem', '7.4rem', '7.4rem', '17rem']}>
        <VolumeChart
          data={
            poolsMetricsOvertime?.map(({ volume, timestamp }) => ({
              name: new Date(timestamp).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              }),
              value: Number(volume),
            })) ?? []
          }
        />
      </Div>
    </>
  );
};

export default Chart;
