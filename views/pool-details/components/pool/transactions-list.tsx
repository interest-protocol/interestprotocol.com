import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, Span } from '@stylin.js/elements';
import Link from 'next/link';
import { FC, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import Dropdown from '@/components/dropdown';
import { ExternalLinkSVG } from '@/components/svg';
import Table from '@/components/table';
import { EXPLORER_URL, Network } from '@/constants';
import { formatDollars } from '@/utils';
import { formatTimeAgo } from '@/utils/date';
import { TRANSACTION_FILTER_DATA } from '@/views/portfolio/portfolio.data';

import { usePoolDetailsContext } from '../../pool-details.context';
import usePoolTransactions from '../../pool-details.hooks/use-pool-transactions';
import PoolsDetailsTableMobile from '../../pools-details-table-mobile';

const TransactionList: FC = () => {
  const { pool } = usePoolDetailsContext();

  const { data, isLoading } = usePoolTransactions(pool.poolAddress);

  const [filter, setFilter] = useState('all');

  const filteredData = useMemo(() => {
    if (!data?.data) return [];
    if (filter === 'all') return data.data;
    return data.data.filter((tx) => tx.eventType.split('::')[2] === filter);
  }, [data, filter]);

  return (
    <Div
      display="flex"
      flexDirection="column"
      gap={['0.75rem', '0.75rem', '0.75rem', '1rem']}
    >
      <Div
        display="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Span
          color="#fff"
          my={['unset', 'unset', 'unset', '0.5rem']}
          fontWeight="400"
          lineHeight="2.25rem"
          fontSize={['1.125rem', '1.125rem', '1.125rem', '1.75rem']}
        >
          Recent Transactions
        </Span>
        <Div display={['none', 'none', 'none', 'flex']}>
          <Dropdown
            isRounded
            placeholder="All transactions"
            options={TRANSACTION_FILTER_DATA}
            onClick={(val) => setFilter(val)}
          />
        </Div>
      </Div>

      <Div display={['none', 'none', 'none', 'flex']}>
        <Table
          gridTemplateColumns="6rem 2fr 1fr 1fr 1fr 3rem"
          title={[
            { description: 'Time' },
            { description: 'Event' },
            { description: 'Volume', position: 'right' },
            ...(pool.tokensMetadata?.map(({ symbol }) => ({
              description: `${symbol} (in $)`,
              position: 'right' as const,
            })) ?? []),
          ]}
          rows={
            filteredData.map(({ timestamp, eventType, usd, coins }) => ({
              link: EXPLORER_URL[Network.MAINNET](`transaction/${timestamp}`),
              target: '_blank',
              cells: [
                {
                  color: '#FFFFFF',
                  Title: isLoading ? (
                    <Skeleton width={80} height={15} />
                  ) : (
                    formatTimeAgo(timestamp)
                  ),
                },
                {
                  color: '#9CA3AF',
                  Title: isLoading ? (
                    <Skeleton width={80} height={15} />
                  ) : (
                    eventType.split('::')[2]
                  ),
                },
                {
                  color: '#FFFFFF',
                  Title: isLoading ? (
                    <Skeleton width={80} height={15} />
                  ) : (
                    formatDollars(+usd, 4)
                  ),
                  position: 'right',
                },
                ...(pool.tokensMetadata?.map(({ type }) => ({
                  color: '#FFFFFF',
                  Title: isLoading ? (
                    <Skeleton width={80} height={15} />
                  ) : (
                    formatDollars(
                      +(
                        coins.find(
                          ({ token }) =>
                            normalizeSuiAddress(token) ===
                            normalizeSuiAddress(type)
                        )?.amount ?? 0
                      ),
                      4
                    )
                  ),
                  position: 'right' as const,
                })) ?? []),
                {
                  color: '#FFFFFF',
                  Content: isLoading ? (
                    <Skeleton width={15} height={15} />
                  ) : (
                    <Link
                      target="_blank"
                      title="Pool Transaction"
                      href={EXPLORER_URL[Network.MAINNET](
                        `transaction/${timestamp}`
                      )}
                    >
                      <Div
                        mx="auto"
                        width="1rem"
                        height="1rem"
                        color="#fff"
                        transition="all 300ms ease-in-out"
                        nHover={{ color: '#B4C5FF' }}
                      >
                        <ExternalLinkSVG
                          maxHeight="1rem"
                          maxWidth="1rem"
                          width="1rem"
                        />
                      </Div>
                    </Link>
                  ),
                },
              ],
            })) ?? []
          }
        />
      </Div>
      <PoolsDetailsTableMobile />
    </Div>
  );
};

export default TransactionList;
