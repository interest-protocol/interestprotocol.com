import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import ArrowRight from '@/components/svg/arrow-right';

import { BreadcrumbProps } from './breadcrumb.types';

const Breadcrumb: FC<BreadcrumbProps> = ({ pairPosition }) => (
  <Div gap="0.5rem" display="flex" alignItems="center">
    <P
      color="#9CA3AF"
      fontWeight="500"
      fontFamily="Inter"
      fontSize="0.875rem"
      lineHeight="1.25rem"
    >
      Positions
    </P>
    <ArrowRight
      maxWidth="0.75rem"
      maxHeight="0.75rem"
      width="100%"
      color="#9CA3AF"
    />
    <P
      color="#9CA3AF"
      fontWeight="500"
      fontFamily="Inter"
      fontSize="0.875rem"
      lineHeight="1.25rem"
    >
      {pairPosition}
    </P>
  </Div>
);
export default Breadcrumb;
