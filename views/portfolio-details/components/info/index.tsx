import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CollapseCardInfo from '../../../components/collapse-card-info';
import { EARNINGS_FEES_DATA, POSITION_OVERVIEW_DATA } from './info.data';
import PoolBalance from './pool-balance';
import YourPositionBanner from './your-position-banner';

const Info: FC = () => (
  <Div display="flex" flexDirection="column" gap="1.5rem">
    <YourPositionBanner />
    <PoolBalance />
    <Div display="flex" flexDirection="column" gap="1rem">
      <CollapseCardInfo
        title="Position Overview"
        data={POSITION_OVERVIEW_DATA}
      />
      <CollapseCardInfo title="Earnings & Fees" data={EARNINGS_FEES_DATA} />
    </Div>
  </Div>
);

export default Info;
