import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import Card from '../card/page';
import PoolBalance from './pool-balance';
import YourPositionBanner from './your-position-banner';

const Info: FC = () => (
  <Div display="flex" flexDirection="column" gap="1rem">
    <YourPositionBanner />
    <PoolBalance />

    <Card
      width="100%"
      title="Position Overview"
      headers={['Your Position', 'Position Range', 'Current Price', 'Leverage']}
      keys={['position', 'range', 'price', 'leverage']}
      values={{
        position: '$19.72K',
        range: '0.997403507 USDC - 0.997602997 USDT',
        price: '0.997403507 per USDC',
        leverage: (
          <Span
            color="#34D399"
            fontWeight="400"
            fontSize="0.875rem"
            fontFamily="Inter"
          >
            20x
          </Span>
        ),
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
            <Span
              bg="#064E3B"
              color="#10B981"
              fontSize="0.75rem"
              p="0.125rem 0.5rem"
              borderRadius="0.5rem"
              ml="0.25rem"
            >
              Rewards
            </Span>
          </>
        ),
        fees1: (
          <>
            0.0000{' '}
            <Span
              bg="#374151"
              color="#9CA3AF"
              fontSize="0.75rem"
              p="0.125rem 0.5rem"
              borderRadius="0.5rem"
              ml="0.25rem"
            >
              Fees
            </Span>
          </>
        ),
        fees2: (
          <>
            0.0000{' '}
            <Span
              bg="#374151"
              color="#9CA3AF"
              fontSize="0.75rem"
              p="0.125rem 0.5rem"
              borderRadius="0.5rem"
              ml="0.25rem"
            >
              Fees
            </Span>
          </>
        ),
      }}
      isLoading={false}
    />
  </Div>
);

export default Info;
