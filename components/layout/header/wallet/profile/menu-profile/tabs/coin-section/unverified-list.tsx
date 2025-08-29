import { FC } from 'react';

import NoCoin from '../no-coin';
import Collapse from './coin-card/collapse';

const UnverifiedCoinList: FC = () => (
  <Collapse title={`0 unverified`}>
    <NoCoin />
  </Collapse>
);

export default UnverifiedCoinList;
