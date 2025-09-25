import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { ArrowRightSVG } from '@/components/svg';

import { BreadcrumbProps } from './breadcrumb.types';

const Breadcrumb: FC<BreadcrumbProps> = ({ pathname, tokenPair }) => (
  <Div gap="1rem" width="100%" display="flex" flexDirection="column">
    <Div mb="1rem" gap="0.5rem" display="flex" alignItems="center">
      <P fontWeight="500" color="#9CA3AF" fontSize="0.875rem">
        {pathname}
      </P>
      <ArrowRightSVG
        maxWidth="0.75rem"
        maxHeight="0.75rem"
        width="100%"
        color="#9CA3AF"
      />
      <P fontWeight="500" color="#9CA3AF" fontSize="0.875rem">
        {tokenPair[0]} - {tokenPair[1]}
      </P>
    </Div>
  </Div>
);
export default Breadcrumb;
