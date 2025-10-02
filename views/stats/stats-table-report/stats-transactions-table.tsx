import { FC } from 'react';

import Table from '@/components/table';
import useCurveTransactions from '@/hooks/use-curve-transactions';
import { formatAddress, formatDollars } from '@/utils';
import { formatTimeAgo } from '@/utils/date';

import { TRANSACTION_STATS_HEADER_DATA } from '../stats.data';

const StatsTransactionsTable: FC = () => {
  const { data: transactionsData } = useCurveTransactions();

  return (
    <Table
      title={TRANSACTION_STATS_HEADER_DATA}
      gridTemplateColumns="repeat(5, 1fr)"
      rows={
        transactionsData?.data.map(({ timestamp, eventType, usd, coins }) => ({
          cells: [
            {
              color: '#FFFFFF',
              Title: formatTimeAgo(timestamp),
            },
            {
              color: '#9CA3AF',
              Title: eventType.split('::')[2],
            },
            {
              color: '#FFFFFF',
              Title: formatDollars(+usd, 4, 'start'),
            },
            ...coins.flatMap(({ amount, token }) => [
              {
                color: '#FFFFFF',
                Title: `${formatDollars(+amount, 4, 'start')} > ${formatAddress(token)}`,
              },
            ]),
          ],
        })) ?? []
      }
    />
  );
};

export default StatsTransactionsTable;
