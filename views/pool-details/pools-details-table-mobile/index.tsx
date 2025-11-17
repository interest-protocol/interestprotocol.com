import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Button } from '@/components/button';
import { ExternalLinkSVG } from '@/components/svg';
import { EXPLORER_URL, Network } from '@/constants';
import { formatDollars } from '@/utils';
import { formatTimeAgo } from '@/utils/date';
import TableMobileLine from '@/views/components/table-mobile-line';
import TableMobileSkeleton from '@/views/components/table-mobile-skeleton';

import { usePoolDetailsContext } from '../pool-details.context';
import usePoolTransactions from '../pool-details.hooks/use-pool-transactions';

const PoolsDetailsTableMobile: FC = () => {
  const { pool } = usePoolDetailsContext();

  const { data, isLoading } = usePoolTransactions(pool.poolAddress);

  return isLoading ? (
    <>
      {data?.data.length &&
        data?.data.map(() => (
          <TableMobileSkeleton key={v4()} buttons={0} linesCount={4} />
        ))}
    </>
  ) : (
    <Div
      width="100%"
      bg="#030712"
      borderStyle="solid"
      flexDirection="column"
      borderRadius="0.5rem"
      borderColor="#1F2937"
      borderWidth="1px 1px 0px 1px"
      display={['flex', 'flex', 'flex', 'flex', 'none']}
    >
      {data?.data.map(({ timestamp, eventType, usd, coins }) => (
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
          <TableMobileLine label="Time" value={formatTimeAgo(timestamp)} />
          <TableMobileLine label="Event" value={eventType.split('::')[2]} />
          <TableMobileLine label="Volume" value={formatDollars(+usd, 4)} />
          {pool.tokensMetadata &&
            pool.tokensMetadata.map(({ type, symbol }) => (
              <TableMobileLine
                key={v4()}
                label={`${symbol} (in $)`}
                value={formatDollars(
                  +(
                    coins.find(
                      ({ token }) =>
                        normalizeSuiAddress(token) === normalizeSuiAddress(type)
                    )?.amount ?? 0
                  ),
                  4
                )}
              />
            ))}
          <Div
            mt="0.5rem"
            gap="0.5rem"
            display="grid"
            gridTemplateColumns="1fr"
          >
            <Link
              target="_blank"
              title="Pool Transaction"
              href={EXPLORER_URL[Network.MAINNET](`transaction/${timestamp}`)}
            >
              <Button
                px="1rem"
                display="flex"
                width="fill-available"
                variant="tonal"
                color="#B4C5FF"
                fontSize="0.875rem"
                lineHeight="1.25rem"
                borderRadius="0.65rem"
                borderColor="#B4C5FF"
                justifyContent="center"
              >
                Explorer
                <ExternalLinkSVG
                  maxHeight="1rem"
                  maxWidth="1rem"
                  width="1rem"
                />
              </Button>
            </Link>
          </Div>
        </Div>
      ))}
    </Div>
  );
};

export default PoolsDetailsTableMobile;
