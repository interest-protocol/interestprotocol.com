import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import UnverifiedCoinList from './unverified-list';
import VerifiedList from './verified-list';

const CoinSection: FC = () => (
  <Div
    width="100%"
    gap="0.75rem"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <Div display="flex" flexDirection="column" width="100%" gap="0.5rem">
      <VerifiedList />
      <UnverifiedCoinList />
    </Div>
  </Div>
);

export default CoinSection;
