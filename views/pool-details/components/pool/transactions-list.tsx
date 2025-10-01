import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, Span } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import Dropdown from '@/components/dropdown';
import { ExternalLinkSVG } from '@/components/svg';
import Table from '@/components/table';
import { EXPLORER_URL, Network } from '@/constants';
import { formatDollars } from '@/utils';
import { formatTimeAgo } from '@/utils/date';
import { TRANSACTION_FILTER_DATA } from '@/views/portfolio/portfolio.data';

import { usePoolDetailsContext } from '../../pool-details.context';
import usePoolTransactions from '../../pool-details.hooks/use-pool-transactions';

const TransactionList: FC = () => {
  const { pool } = usePoolDetailsContext();

  const { data } = usePoolTransactions(pool.poolAddress);

  return (
    <Div display="flex" flexDirection="column" gap="1rem">
      <Div
        display="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Span
          color="#fff"
          my="0.5rem"
          fontWeight="400"
          lineHeight="2.25rem"
          fontSize={['1.125rem', '1.125rem', '1.125rem', '1.75rem']}
        >
          Recent Transactions
        </Span>
        <Dropdown
          isRounded
          placeholder="transaction"
          options={TRANSACTION_FILTER_DATA}
        />
      </Div>
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
          data?.data.map(({ timestamp, eventType, usd, coins }) => ({
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
                Title: formatDollars(+usd, 4),
                position: 'right',
              },
              ...(pool.tokensMetadata?.map(({ type }) => ({
                color: '#FFFFFF',
                Title: formatDollars(
                  +(
                    coins.find(
                      ({ token }) =>
                        normalizeSuiAddress(token) === normalizeSuiAddress(type)
                    )?.amount ?? 0
                  ),
                  4
                ),
                position: 'right' as const,
              })) ?? []),
              {
                color: '#FFFFFF',
                Content: (
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
  );
};

export default TransactionList;
