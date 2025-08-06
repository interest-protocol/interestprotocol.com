import { Box } from '@interest-protocol/ui-kit';
import { NextPage } from 'next';
import { v4 } from 'uuid';

import { SEO } from '@/components';
import Strategy from '@/components/strategy';
import { STRATEGIES } from '@/constants/strategies';

const StrategyPage: NextPage = () => {
  return (
    <>
      <SEO pageTitle="Strategy" />
      <Box
        p="4rem"
        display="flex"
        gap="m"
        justifyContent="space-between"
        flexDirection={['column', 'row']}
      >
        {STRATEGIES.map((strategy) => (
          <Strategy key={v4()} {...strategy} isLoading />
        ))}
      </Box>
    </>
  );
};

export default StrategyPage;
