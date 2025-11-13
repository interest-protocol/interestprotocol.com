import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import VolumeChart from '@/components/volume-chart';

import { ChartSectionProps } from './chart-section.types';

const ChartSection: FC<ChartSectionProps> = ({
  title,
  data,
  label,
  loading,
}) => {
  return (
    <Div
      p="1rem"
      borderRadius="0.5rem"
      display="flex"
      flexDirection="column"
      gap="0.625rem"
      bg="#9CA3AF0D"
      border="1px solid #1F2937"
    >
      <Span
        fontWeight="500"
        color="#FFFFFF"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.5rem"
      >
        {title}
      </Span>
      <Div width="100%" height={['10.5rem', '10.5rem', '10.5rem', '11.75rem']}>
        {loading ? (
          <Skeleton width="100%" height="100%" baseColor="#9CA3AF1A" />
        ) : (
          <VolumeChart
            data={data}
            chartInfo={{
              dataKey: 'volume',
              color: '#2A5ADA',
              label: label || title,
            }}
          />
        )}
      </Div>
    </Div>
  );
};

export default ChartSection;
