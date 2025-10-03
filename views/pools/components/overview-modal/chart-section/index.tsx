import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import VolumeChart from '@/components/volume-chart';

import { ChartSectionProps } from './chart-section.types';

const ChartSection: FC<ChartSectionProps> = ({ title, data }) => {
  const formattedData = data.map((d) => ({
    name: new Date(d.timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }),
    value: d.volume ?? d.liquidity ?? 0,
  }));

  return (
    <Div>
      <Div
        mx={['-1rem', '-1rem', '-1rem', 0]}
        borderTop={[
          '1px solid #4B556380',
          '1px solid #4B556380',
          '1px solid #4B556380',
          'none',
        ]}
      />
      <Div
        gap="0.25rem"
        display="flex"
        flexDirection="column"
        mt={['1rem', '1rem', '1rem', '0']}
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
        <Div
          width="100%"
          height={['10.5rem', '10.5rem', '10.5rem', '11.75rem']}
        >
          <VolumeChart data={formattedData} />
        </Div>
      </Div>
    </Div>
  );
};

export default ChartSection;
