import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import VolumeChart from '@/components/volume-chart';
import { VOLUME_DATA } from '@/components/volume-chart/volume-chart.data';

import ChartFilters from './chart-filters';

const Chart: FC = () => (
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
          $47.26K
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
        Jun 15, 2025, 9:00 PM
      </Span>
    </Div>
    <Div width="100%" height={['7.4rem', '7.4rem', '7.4rem', '17rem']}>
      <VolumeChart data={VOLUME_DATA} />
    </Div>
    <ChartFilters />
  </>
);

export default Chart;
