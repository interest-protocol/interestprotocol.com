import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import PoolName from '@/components/pool-name';
import { formatDollars } from '@/utils';
import TableMobileSkeleton from '@/views/components/table-mobile-skeleton';
import usePoolsMetrics from '@/views/pools/pools.hooks/use-pools-metrics';

import TableMobileLine from '../../components/table-mobile-line';

const StatsPoolsTableMobile: FC = () => {
  const { data: metricsData, isLoading } = usePoolsMetrics();
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
      {metricsData?.data.map((pool) => (
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
          <Div display="flex" alignItems="center" gap="0.5rem">
            <PoolName
              address={pool.poolId}
              symbols={pool.symbols}
              tokensAddresses={pool.coins}
            />
          </Div>
          <TableMobileLine
            label="TVL"
            value={formatDollars(Number(pool.metrics.tvl), 6, 'start')}
          />
          <TableMobileLine
            label="24h Volume"
            value={formatDollars(Number(pool.metrics.volume1D), 6, 'start')}
          />
          <TableMobileLine
            label="All time volume"
            value={formatDollars(Number(pool.metrics.volume), 6, 'start')}
          />
          <TableMobileLine
            label="24h Fees"
            value={formatDollars(Number(pool.metrics.fees1D), 6, 'start')}
          />
          <TableMobileLine
            label="All time fees"
            value={formatDollars(Number(pool.metrics.fees), 6, 'start')}
          />
        </Div>
      ))}
    </Div>
  );
};

export default StatsPoolsTableMobile;
