import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import ChartSection from './chart-section';
import OverviewHeader from './overview-header';
import { OverviewModalProps } from './overview-modal.types';

const OverviewModal: FC<OverviewModalProps> = ({
  lp,
  token,
  value,
  poolVolume,
  poolLiquidity,
}) => (
  <Div
    gap="1rem"
    display="flex"
    borderRadius="1rem"
    flexDirection="column"
    p={['1rem', '1rem', '1rem', 0]}
    bg={['#9CA3AF1A', '#9CA3AF1A', '#9CA3AF1A', 'transparent']}
  >
    <OverviewHeader lp={lp} token={token} value={value} />
    <ChartSection title="Pool Volume" data={poolVolume} />
    <ChartSection title="Pool Liquidity" data={poolLiquidity} />
  </Div>
);

export default OverviewModal;
