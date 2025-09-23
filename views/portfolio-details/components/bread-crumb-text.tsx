import { P } from '@stylin.js/elements';
import { FC } from 'react';

import { CrumbTextProps } from './breadcrumb/breadcrumb.types';

const CrumbText: FC<CrumbTextProps> = ({ children }) => (
  <P
    color="#9CA3AF"
    fontWeight="500"
    fontFamily="Inter"
    fontSize="0.875rem"
    lineHeight="1.25rem"
  >
    {children}
  </P>
);

export default CrumbText;
