import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { MetricInfoProps } from './metric-info.types';

const MetricInfo: FC<MetricInfoProps> = ({ title, value }) => (
  <Div gap="0.25rem" display="flex" height="auto" flexDirection="column">
    <P
      color="#9CA3AF"
      fontWeight="400"
      fontFamily="Inter"
      fontSize="0.875rem"
      lineHeight="1.25rem"
    >
      {title}
    </P>
    <P color="#FFFFFF" fontFamily="Inter" fontSize="1.375rem" lineHeight="2rem">
      {value}
    </P>
  </Div>
);

export default MetricInfo;
