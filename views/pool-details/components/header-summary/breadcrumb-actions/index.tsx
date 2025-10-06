import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { BoxSVG, ShareSVG } from '@/components/svg';
import { noop } from '@/utils';

import BreadcrumbActionWrapper from './wrapper';

const BreadcrumbActions: FC = () => (
  <Div display="none" gap="0.5rem">
    <BreadcrumbActionWrapper onClick={noop}>
      <BoxSVG maxHeight="100%" maxWidth="100%" width="100%" />
    </BreadcrumbActionWrapper>
    <BreadcrumbActionWrapper onClick={noop}>
      <ShareSVG maxHeight="100%" maxWidth="100%" width="100%" />
    </BreadcrumbActionWrapper>
  </Div>
);

export default BreadcrumbActions;
