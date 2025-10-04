import { Div } from '@stylin.js/elements';
import { FC, useMemo, useState } from 'react';

import usePoolMetricsOvertime from '@/views/pool-details/pool-details.hooks/use-pool-metrics-overtime';

import { AggregationValue } from '../../header-summary/pool-header-summary.types';
import ChartSection from './chart-section';
import OverviewHeader from './overview-header';
import { OverviewModalProps } from './overview-modal.types';

const OverviewModal: FC<OverviewModalProps> = (props) => {
  const [aggregation, setAggregation] = useState<AggregationValue>('daily');
  const { data: poolsMetricsOvertime, isLoading } = usePoolMetricsOvertime(
    props.address,
    aggregation
  );

  const { volumeData, liquidityData } = useMemo(() => {
    if (!poolsMetricsOvertime) {
      return { volumeData: [], liquidityData: [] };
    }

    const volume: Array<{ name: string; value: number }> = [];
    const liquidity: Array<{ name: string; value: number }> = [];

    poolsMetricsOvertime.forEach(({ volume: vol, tvl, timestamp }) => {
      const name = new Date(timestamp).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
      volume.push({ name, value: Number(vol) });
      liquidity.push({ name, value: Number(tvl) });
    });

    return { volumeData: volume, liquidityData: liquidity };
  }, [poolsMetricsOvertime]);

  return (
    <Div
      gap="1rem"
      display="flex"
      borderRadius="1rem"
      flexDirection="column"
      p={['1rem', '1rem', '1rem', 'unset']}
      bg={['#9CA3AF1A', '#9CA3AF1A', '#9CA3AF1A', 'transparent']}
    >
      <OverviewHeader
        {...props}
        aggregation={aggregation}
        setAggregation={setAggregation}
      />
      <ChartSection title="Pool Volume" data={volumeData} loading={isLoading} />
      <ChartSection
        title="Pool Liquidity"
        data={liquidityData}
        loading={isLoading}
      />
    </Div>
  );
};

export default OverviewModal;
