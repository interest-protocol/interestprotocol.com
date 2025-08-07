import { Box } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import Layout from '@/components/layout';
import Strategy from '@/components/strategy';

import { STRATEGIES } from './strategies.data';

const StrategyView: FC = () => {
  const [selectedStrategyId, setSelectedStrategyId] = useState<string | null>(
    null
  );

  const handleSelectStrategy = (id: string) => {
    setSelectedStrategyId(selectedStrategyId == id ? null : id);
  };

  return (
    <Layout>
      <Box
        display="flex"
        width="100%"
        maxWidth="54rem"
        height="39rem"
        flexDirection="column"
        mx="auto"
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          bg="#9CA3AF1A"
          alignItems="center"
          flexDirection="column"
          borderRadius="0.75rem"
          justifyContent="flex-end"
          p="1.5rem"
        >
          <Box
            display="grid"
            width="100%"
            gap={['0.25rem', '0.25rem', '0.75rem']}
            gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
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

export default StrategyView;
