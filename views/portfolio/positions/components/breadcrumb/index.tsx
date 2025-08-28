import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import ArrowRight from '@/components/svg/arrow-right';
import TokenIcon from '@/components/token-icon';
import StatusBtn from '@/views/portfolio/components/status-btn ';

import CrumbText from '../bread-crumb-text';
import { BreadcrumbProps } from './breadcrumb.types';

const Breadcrumb: FC<BreadcrumbProps> = ({ pools, lp }) => (
  <Div gap="1rem" width="100%" display="flex" flexDirection="column">
    <Div mb="1rem" gap="0.5rem" display="flex" alignItems="center">
      <CrumbText>Positions</CrumbText>
      <ArrowRight
        maxWidth="0.75rem"
        maxHeight="0.75rem"
        width="100%"
        color="#9CA3AF"
      />
      <CrumbText>
        {pools[0]} - {pools[1]}
      </CrumbText>
    </Div>

    <Div display="flex" alignItems="center" justifyContent="space-between">
      <Div gap="1rem" display="flex" alignItems="center">
        <TokenIcon
          withBg
          rounded
          size="1rem"
          url={lp}
          symbol="MOVE"
          network={Network.MovementMainnet}
        />
        <P
          color="#E5E7EB"
          fontWeight="600"
          fontFamily="Inter"
          fontSize="1.75rem"
          lineHeight="2.8125rem"
        >
          {pools[0]} - {pools[1]}
        </P>
      </Div>
      <StatusBtn status="Range" />
    </Div>
  </Div>
);
export default Breadcrumb;
