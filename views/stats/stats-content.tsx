import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import unikey from 'unikey';

import { useTabState } from '@/hooks/use-tab-manager';

import HeadInfo from './components/head-info';
import Pools from './components/pools';
import StatsTabs from './components/stats-tabs';
import Tokens from './components/tokens';
import Transactions from './components/transactions';

const StatsContent: FC = () => {
  const { tab } = useTabState();
  const [interval, setInterval] = useState<'1W' | '1M' | '3M'>('1M');

  return (
    <Div
      width="100%"
      display="flex"
      flexDirection="column"
      px={['0rem', '2.5rem']}
    >
      <Div
        mb="1rem"
        gap="1rem"
        width="100%"
        display="grid"
        gridTemplateColumns={['1fr', '1fr 1fr']}
      >
        <Div display="flex" flexDirection="column" gap="1rem">
          <HeadInfo name="IPX TVL" value="$31.987.15" date="May 15, 2025" />
          <Skeleton width="100%" height="18.75rem" baseColor="#9CA3AF1A" />
        </Div>

        <Div display="flex" flexDirection="column" gap="1rem">
          <Div display="flex" justifyContent="space-between">
            <HeadInfo
              name="IPX TVL"
              value="$31.987.15"
              symbol="USD"
              date="May 15, 2025"
            />
            <Div
              gap="0.5rem"
              height="1.75rem"
              display="flex"
              p="0.25rem 0.75rem"
              border="1px solid #9CA3AF1A"
              borderRadius="9999rem"
            >
              {(['1W', '1M', '3M'] as const).map((intendedInterval) => (
                <Div
                  height="1.25rem"
                  fontSize="0.875rem"
                  display="flex"
                  alignItems="center"
                  borderRadius="9999rem"
                  key={intendedInterval}
                  padding="0.5rem 0.75rem"
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
          <Tokens key={unikey()} />,
          <Pools key={unikey()} />,
          <Transactions key={unikey()} />,
        ][tab]
      }
    </Div>
  );
};

export default StatsContent;
