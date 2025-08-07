import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import Layout from '@/components/layout';
import PoolPrice from '@/views/pool-create/components/pool-price';

import Strategy from './components/strategy';
import { STRATEGIES } from './strategies.data';

const PoolCreate: FC = () => {
  const [selectedStrategyId, setSelectedStrategyId] = useState<string | null>(
    null
  );

  const handleSelectStrategy = (id: string) => {
    setSelectedStrategyId(selectedStrategyId == id ? null : id);
  };

  return (
    <Layout>
      <Box
        mx="auto"
        width="100%"
        display="flex"
        height="39rem"
        maxWidth="54rem"
        flexDirection="column"
      >
        <Box
          p="1.5rem"
          gap="1rem"
          width="100%"
          height="100%"
          display="flex"
          bg="#9CA3AF1A"
          alignItems="center"
          flexDirection="column"
          borderRadius="0.75rem"
          justifyContent="flex-end"
        >
          <Box
            width="100%"
            display="grid"
            alignItems="center"
            gap={['1rem', '0.75rem']}
            justifyContent="space-between"
            gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 27.6875rem']}
          >
            <Box gap="0.5rem" display="flex" flexDirection="column">
              <Typography
                size="medium"
                variant="body"
                fontSize="1rem"
                color="#E5E7EB"
                fontWeight="600"
                lineHeight="1rem"
                fontFamily="Inter"
              >
                Pool price
              </Typography>

              <Typography
                size="medium"
                variant="body"
                color="#9CA3AF"
                fontWeight="400"
                fontSize="0.75rem"
                lineHeight="1rem"
                fontFamily="Inter"
                width={['100%', '100%', '70%']}
              >
                Pool price depends on initial price of both tokens added.
              </Typography>
            </Box>

            <PoolPrice />
          </Box>

          <Box
            width="100%"
            display="grid"
            justifyContent="space-between"
            gap={['0.25rem', '0.25rem', '0.75rem']}
            gridTemplateColumns={['1fr', '1fr', 'repeat(3, minmax(0, 16rem))']}
          >
            {STRATEGIES.map((strategy) => (
              <Strategy
                key={v4()}
                {...strategy}
                isLoading={false}
                selected={selectedStrategyId === strategy.pairId}
                onSelect={() => handleSelectStrategy(strategy.pairId)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default PoolCreate;
