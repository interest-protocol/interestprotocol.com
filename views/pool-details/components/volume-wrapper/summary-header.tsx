import { Div, Span } from '@stylin.js/elements';
import { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { formatDollars } from '@/utils';
import { formatNumber } from '@/utils/number';
import usePoolsMetrics from '@/views/pools/pools.hooks/use-pools-metrics';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import { usePoolDetailsContext } from '../../pool-details.context';
import PoolBalance from '../pool-balance';

const SummaryHeader: FC = () => {
  const { setValue } = useFormContext<PortfolioDetailsFormProps>();
  const { pool } = usePoolDetailsContext();
  const { data: poolsMetrics, isLoading } = usePoolsMetrics();

  const poolMetrics = poolsMetrics?.data.find(
    (metric) => metric.poolId === pool?.poolAddress
  );

  useEffect(() => {
    !isLoading &&
      setValue(
        'tvl',
        poolMetrics?.metrics.tvl ? poolMetrics?.metrics.tvl : '0'
      );
  }, [isLoading, poolsMetrics]);

  return (
    <Div
      gap="1rem"
      display="grid"
      justifyItems="start end"
      justifyContent="space-between"
      gridTemplateColumns={[
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr',
        'repeat(5, 1fr)',
      ]}
    >
      {[
        {
          label: 'TVL',
          amount: formatDollars(
            Number(formatNumber(poolMetrics?.metrics.tvl)),
            6,
            'start'
          ),
        },
        {
          label: '24H Volume',
          amount: formatDollars(
            Number(formatNumber(poolMetrics?.metrics.volume1D)),
            6,
            'start'
          ),
        },
        {
          label: '24H Fees',
          amount: formatDollars(
            Number(formatNumber(poolMetrics?.metrics.fees1D)),
            6,
            'start'
          ),
        },
        {
          label: 'Total APR',
          amount: `${+(+(formatNumber(poolMetrics?.metrics.apr) ?? 0) + +(formatNumber(poolMetrics?.metrics.farmApr) ?? 0)).toFixed(2)}%`,
        },
      ].map(({ label, amount }, index) => (
        <Div
          key={v4()}
          display="flex"
          gap="0.75rem"
          flexDirection="column"
          justifySelf={[
            index % 2 == 1 ? 'end' : 'unset',
            index % 2 == 1 ? 'end' : 'unset',
            index % 2 == 1 ? 'end' : 'unset',
            index % 2 == 1 ? 'end' : 'unset',
            'unset',
          ]}
        >
          <Span
            fontWeight="400"
            color="#9CA3AF"
            fontSize={['0.75rem', '0.75rem', '0.75rem', '0.75rem', '0.875rem']}
            lineHeight={['1.25rem', '1.25rem', '1.25rem', '1.25rem', '1.75rem']}
          >
            {label}
          </Span>
          <Span
            color="#fff"
            fontWeight="500"
            lineHeight={['2rem', '2rem', '2rem', '2rem', '2.25rem']}
            fontSize={[
              '1.125rem',
              '1.125rem',
              '1.125rem',
              '1.125rem',
              '1.5rem',
            ]}
          >
            {amount}
          </Span>
        </Div>
      ))}
      <Div
        key={v4()}
        flexWrap="wrap"
        flexDirection="column"
        display={['none', 'none', 'none', 'none', 'flex']}
      >
        <PoolBalance />
      </Div>
    </Div>
  );
};

export default SummaryHeader;
