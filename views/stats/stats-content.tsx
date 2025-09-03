import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { useTabState } from '@/hooks/use-tab-manager';

import HeadInfo from './components/head-info';
import StatsTabs from './components/stats-tabs';
import {
  POOL_STATS_DATA,
  POOLS_STATS_HEADER_DATA,
  TOKEN_STATS_DATA,
  TOKENS_STATS_HEADER_DATA,
} from './stats.data';
import Table from './table';

const StatsContent: FC = () => {
  const { tab } = useTabState();
  const [interval, setInterval] = useState<'1W' | '1M' | '3M'>('1M');

  return (
    <Div
      width="100%"
      display="flex"
      flexDirection="column"
      mt={['1.5rem', '2.5rem']}
    >
      <Div
        mb="1rem"
        gap="1rem"
        width="100%"
        display="grid"
        gridTemplateColumns={['1fr', '1fr 1fr']}
      >
        <Div display="flex" flexDirection="column" gap="1rem">
          <HeadInfo
            name="IPX TVL"
            value={312323.12}
            date="2025-08-22T05:42:10.123Z"
          />
          <Skeleton width="100%" height="18.75rem" baseColor="#9CA3AF1A" />
        </Div>

        <Div display="flex" flexDirection="column" gap="1rem">
          <Div display="flex" justifyContent="space-between">
            <HeadInfo
              symbol="USD"
              name="IPX TVL"
              value={312323.12}
              date="2025-08-22T05:42:10.123Z"
            />
            <Div
              gap="0.5rem"
              height="1.75rem"
              display="flex"
              p="0.25rem 0.5rem"
              border="1px solid #9CA3AF1A"
              borderRadius="9999rem"
            >
              {(['1W', '1M', '3M'] as const).map((intendedInterval) => (
                <Div
                  display="flex"
                  fontSize="0.875rem"
                  alignItems="center"
                  borderRadius="9999rem"
                  key={intendedInterval}
                  padding="0.25rem 0.5rem"
                  onClick={() => setInterval(intendedInterval)}
                  color={interval === intendedInterval ? '#FFFFFF' : '#9CA3AF'}
                  pointerEvents={
                    interval === intendedInterval ? 'none' : undefined
                  }
                  backgroundColor={
                    interval === intendedInterval ? '#9CA3AF33' : 'transparent'
                  }
                  style={{
                    cursor:
                      interval === intendedInterval ? 'default' : 'pointer',
                  }}
                >
                  {intendedInterval}
                </Div>
              ))}
            </Div>
          </Div>
          <Skeleton width="100%" height="18.75rem" baseColor="#9CA3AF1A" />
        </Div>
      </Div>
      <StatsTabs />
      {
        [
          <Table
            key={v4()}
            rows={TOKEN_STATS_DATA}
            title={TOKENS_STATS_HEADER_DATA}
            gridTemplateColumns="4rem repeat(6, 1fr)"
          />,
          <Table
            key={v4()}
            rows={POOL_STATS_DATA}
            title={POOLS_STATS_HEADER_DATA}
            gridTemplateColumns="4rem repeat(6, 1fr)"
          />,
          <Table
            key={v4()}
            rows={TOKEN_STATS_DATA}
            title={TOKENS_STATS_HEADER_DATA}
            gridTemplateColumns="4rem repeat(6, 1fr)"
          />,
        ][tab]
      }
    </Div>
  );
};

export default StatsContent;
