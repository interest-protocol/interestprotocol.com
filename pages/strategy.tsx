import { Box } from '@interest-protocol/ui-kit';
import { NextPage } from 'next';
import { useState } from 'react';

import { SEO } from '@/components';
import Layout from '@/components/layout';
import Strategy from '@/components/strategy';
import { STRATEGIES } from '@/constants/strategies';

const StrategyPage: NextPage = () => {
  const [selectedStrategyId, setSelectedStrategyId] = useState<string | null>(
    null
  );

  const handleSelectStrategy = (id: string) => {
    setSelectedStrategyId(id);
  };

  return (
    <>
      <SEO pageTitle="Strategy" />
      <Layout>
        <Box width="100%" display="flex" flexDirection="column" gap="1.5rem">
          <Box
            gap="1.5rem"
            display="grid"
            gridTemplateColumns={['1fr', '1fr 1fr 1fr']}
          >
            {STRATEGIES.map((strategy) => (
              <Strategy
                {...strategy}
                key={strategy.id}
                isLoading={false}
                selected={selectedStrategyId === strategy.id}
                onSelect={() => handleSelectStrategy(strategy.id)}
              />
            ))}
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default StrategyPage;
