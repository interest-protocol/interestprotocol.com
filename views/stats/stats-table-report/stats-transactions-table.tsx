import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Table from '@/components/table';
import useCurveTransactions from '@/hooks/use-curve-transactions';
import { formatAddress, formatDollars } from '@/utils';
import { formatTimeAgo } from '@/utils/date';

import { TRANSACTION_STATS_HEADER_DATA } from '../stats.data';
import StatsTransactionTableMobile from './stats-transactions-table-mobile';

const StatsTransactionsTable: FC = () => {
  const { data: transactionsData, isLoading } = useCurveTransactions();

  return (
    <>
      <Div display={['none', 'none', 'none', 'flex']}>
        <Table
          isLoading={isLoading}
          gridTemplateColumns="repeat(5, 1fr)"
          title={TRANSACTION_STATS_HEADER_DATA}
          rows={
            transactionsData?.data.map(
              ({ timestamp, eventType, usd, coins }) => ({
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
              })
            ) ?? []
          }
        />
      </Div>
      <StatsTransactionTableMobile />
    </>
  );
};

export default StatsTransactionsTable;
