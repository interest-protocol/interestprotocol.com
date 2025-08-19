import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { useTabState } from '@/hooks/use-tab-manager';

import Pools from './components/pools';
import StatsTabs from './components/stats-tabs';
import Tokens from './components/tokens';
import Transactions from './components/transactions';

const StatsContent: FC = () => {
  const { tab } = useTabState();

  return (
    <Div
      width="100%"
      display="flex"
      flexDirection="column"
      px={['0rem', '2.5rem']}
    >
      <StatsTabs />
      {
        [
          <Tokens key={unikey()} />,
          <Pools key={unikey()} />,
          <Transactions key={unikey()} />,
        ][tab]
      }
    </Div>
  );
};

export default StatsContent;
