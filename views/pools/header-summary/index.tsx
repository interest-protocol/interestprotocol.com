import { FC } from 'react';

import PoolHeaderSummaryDesktop from './desktop';
import PoolHeaderSummaryMobile from './mobile';
import { HeaderSummaryProps } from './pool-header-summary.types';

const PoolHeaderSummary: FC<HeaderSummaryProps> = ({ data }) => (
  <>
    <PoolHeaderSummaryMobile data={data} />
    <PoolHeaderSummaryDesktop data={data} />
  </>
);

export default PoolHeaderSummary;
