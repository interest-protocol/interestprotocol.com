import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import Table from '@/components/table';
import useCurveTransactions from '@/hooks/use-curve-transactions';
import { formatAddress, formatDollars } from '@/utils';
import { formatTimeAgo } from '@/utils/date';

import { TRANSACTION_STATS_HEADER_DATA } from '../stats.data';
import StatsTransactionTableMobile from './stats-transactions-table-mobile';

const StatsTransactionsTable: FC = () => {
  const { data: transactionsData, isLoading } = useCurveTransactions();

  const skeletonRows = [...Array(5)].map(() => ({
    cells: [
      { Title: <Skeleton width={80} height={15} /> },
      { Title: <Skeleton width={60} height={15} /> },
      { Title: <Skeleton width={90} height={15} /> },
      { Title: <Skeleton width={120} height={15} /> },
      { Title: <Skeleton width={100} height={15} /> },
    ],
  }));

  const rows =
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
    })) ?? [];

  return (
    <>
      <Div display={['none', 'none', 'none', 'flex']}>
        <Table
          gridTemplateColumns="repeat(5, 1fr)"
          title={TRANSACTION_STATS_HEADER_DATA}
          rows={isLoading ? skeletonRows : rows}
        />
      </Div>
      <StatsTransactionTableMobile />
    </>
  );
};

export default StatsTransactionsTable;
