import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { formatDollars } from '@/utils/string';

const YourPositionBanner: FC = () => (
  <Div
    gap="0.5rem"
    display="flex"
    bg="#9CA3AF1A"
    p="0.75rem 1rem"
    alignItems="center"
    borderRadius="0.75rem"
    justifyContent="space-between"
    border="1px solid #9CA3AF1A"
  >
    <P
      fontSize="1rem"
      fontWeight="500"
      color="#9CA3AF"
      fontFamily="Inter"
      lineHeight="1.5rem"
    >
      Your position:
    </P>
    <Span
      fontSize="1rem"
      fontWeight="500"
      color="#FFFFFF"
      fontFamily="Inter"
      lineHeight="1.5rem"
    >
      {formatDollars(1931211, 6, 'start')}
    </Span>
  </Div>
);

export default YourPositionBanner;
