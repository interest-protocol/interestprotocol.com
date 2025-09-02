import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { MetricProps } from './metric.types';

const Metric: FC<MetricProps> = ({ label, value, color, suffix }) => (
  <Div
    gap="0.5rem"
    display="flex"
    flexDirection="column"
    justifyContent="center"
  >
    <P color="#9CA3AF" fontWeight="400" fontFamily="Inter" fontSize="0.875rem">
      {label}
    </P>
    <Span color={color} fontWeight="500" fontFamily="Inter" fontSize="1rem">
      {value.toFixed(2)}
      {suffix}
    </Span>
  </Div>
);

export default Metric;
