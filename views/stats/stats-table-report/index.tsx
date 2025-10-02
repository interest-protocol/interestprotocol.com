import { FC } from 'react';
import { v4 } from 'uuid';

import { useTabState } from '@/hooks/use-tab-manager';

import StatsTabs from '../components/stats-tabs';
import StatsPoolsTable from './stats-pools-table';
import StatsTransactionsTable from './stats-transactions-table';

const StatsTableReports: FC = () => {
  const { tab } = useTabState();

  return (
    <>
      <StatsTabs key={v4()} />
      {
        [<StatsPoolsTable key={v4()} />, <StatsTransactionsTable key={v4()} />][
          tab
        ]
      }
    </>
  );
};

export default StatsTableReports;
