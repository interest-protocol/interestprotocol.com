import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import useCurveTransactions from '@/hooks/use-curve-transactions';
import { formatAddress, formatDollars } from '@/utils';
import { formatTimeAgo } from '@/utils/date';
import TableMobileSkeleton from '@/views/components/table-mobile-skeleton';

import TableMobileLine from '../../../components/table-mobile-line';
import { TRANSACTION_STATS_HEADER_DATA } from '../../stats.data';

const StatsTransactionTableMobile: FC = () => {
  const { data: transactionsData, isLoading } = useCurveTransactions();
  return isLoading ? (
    <TableMobileSkeleton />
  ) : (
    <Div
      width="100%"
      borderStyle="solid"
      flexDirection="column"
      borderRadius="0.5rem"
      borderColor="#1F2937"
      borderWidth="1px 1px 0px 1px"
      display={['flex', 'flex', 'flex', 'none']}
      bg="#030712"
    >
      {transactionsData?.data.map(({ timestamp, eventType, usd, coins }) => (
        <Div
          key={v4()}
          p="1rem"
          display="flex"
          flexDirection="column"
          gap="0.5rem"
          borderStyle="solid"
          borderColor="#1F2937"
          borderWidth="0px 0px 1px 0px"
        >
          <TableMobileLine
            label={TRANSACTION_STATS_HEADER_DATA[0].description}
            value={formatTimeAgo(timestamp)}
          />
          <TableMobileLine
            label={TRANSACTION_STATS_HEADER_DATA[1].description}
            value={eventType.split('::')[2]}
          />
          <TableMobileLine
            label={TRANSACTION_STATS_HEADER_DATA[2].description}
            value={formatDollars(+usd, 4, 'start')}
          />
          {...coins.flatMap(({ amount, token }) => [
            <TableMobileLine
              key={v4()}
              label={TRANSACTION_STATS_HEADER_DATA[3].description}
              value={`${formatDollars(+amount, 4, 'start')} > ${formatAddress(token)}`}
            />,
          ])}
        </Div>
      ))}
    </Div>
  );
};

export default StatsTransactionTableMobile;
