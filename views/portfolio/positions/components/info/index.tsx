import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import Card from '../card/page';
import PoolBalance from './components/pool-balance';

const Info: FC = () => (
  <Div display="flex" flexDirection="column" gap="1rem">
    <Div
      mb="1.5rem"
      gap="0.5rem"
      display="flex"
      bg="#9CA3AF1A"
      p="0.75rem 1rem"
      alignItems="center"
      borderRadius="0.75rem"
      justifyContent="space-between"
      border="1px solid #9CA3AF1A"
    >
      <P color="#9CA3AF" fontSize="1rem" fontWeight="500" fontFamily="Inter">
        Your posirtion:
      </P>
      <Span color="#FFFFFF" fontSize="1rem" fontWeight="500" fontFamily="Inter">
        $19,720.00
      </Span>
    </Div>

    <PoolBalance
      pairTokens={[
        { symbol: 'ETH', value: 10, percent: 60, icon: '/eth.png' },
        { symbol: 'USDT', value: 6, percent: 40, icon: '/usdt.png' },
      ]}
    />

    <Card
      width="100%"
      title="Position Overview"
      headers={['Your Position', 'Position Range', 'Current Price', 'Leverage']}
      keys={['position', 'range', 'price', 'leverage']}
      values={{
        position: '$19.72K',
        range: '0.997403507 USDC - 0.997602997 USDT',
        price: '0.997403507 per USDC',
        leverage: <span style={{ color: '#22C55E' }}>20x</span>,
      }}
      isLoading={false}
    />

    <Card
      width="100%"
      title="Earnings & Fees"
      headers={['Pooled USDT', 'Pooled USDT', 'Pooled USDT']}
      keys={['rewards', 'fees1', 'fees2']}
      values={{
        rewards: (
          <>
            0.5000{' '}
            <span
              style={{
                background: '#064E3B',
                color: '#10B981',
                fontSize: '0.75rem',
                padding: '0.125rem 0.5rem',
                borderRadius: '0.5rem',
                marginLeft: '0.25rem',
              }}
            >
              Rewards
            </span>
          </>
        ),
        fees1: (
          <>
            0.0000{' '}
            <span
              style={{
                background: '#374151',
                color: '#9CA3AF',
                fontSize: '0.75rem',
                padding: '0.125rem 0.5rem',
                borderRadius: '0.5rem',
                marginLeft: '0.25rem',
              }}
            >
              Fees
            </span>
          </>
        ),
        fees2: (
          <>
            0.0000{' '}
            <span
              style={{
                background: '#374151',
                color: '#9CA3AF',
                fontSize: '0.75rem',
                padding: '0.125rem 0.5rem',
                borderRadius: '0.5rem',
                marginLeft: '0.25rem',
              }}
            >
              Fees
            </span>
          </>
        ),
      }}
      isLoading={false}
    />
  </Div>
);

export default Info;
