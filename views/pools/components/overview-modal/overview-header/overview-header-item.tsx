import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { OverviewHeaderItemProps } from './overview-header.types';

const OverviewHeaderItem: FC<OverviewHeaderItemProps> = ({ title, value }) => (
  <Div display="flex" flexDirection="column" gap="0.25rem">
    <Span
      color="#9CA3AF"
      fontSize="0.75rem"
      fontWeight="400"
      fontFamily="Inter"
      lineHeight="1rem"
    >
      {title}
    </Span>
    <Span
      fontWeight="500"
      lineHeight="1rem"
      fontFamily="Inter"
      fontSize="0.875rem"
    >
      {value}
    </Span>
  </Div>
);

export default OverviewHeaderItem;
