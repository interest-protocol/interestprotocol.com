import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { ArrowRightSVG } from '@/components/svg';

import { BreadcrumbProps } from './breadcrumb.types';

const Breadcrumb: FC<BreadcrumbProps> = ({ basePage, currentPage }) => (
  <Div gap="0.5rem" display="flex" alignItems="center">
    <P
      color="#9CA3AF"
      fontWeight="500"
      fontFamily="Inter"
      fontSize="0.875rem"
      lineHeight="1.25rem"
    >
      {basePage}
    </P>
    <ArrowRightSVG
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
      {currentPage}
    </P>
  </Div>
);
export default Breadcrumb;
