import { FC } from 'react';

import PoolPriceSection from '@/views/pool-create/components/pool-price';

import PairTokenSection from './components/pair-token';
import PoolCreateFormButton from './components/pool-create-form-button';
import StrategySection from './components/strategy';
import PoolCreateWrapper from './pool-create-wrapper';

const PoolCreate: FC = () => (
  <PoolCreateWrapper>
    <PairTokenSection />
    <PoolPriceSection />
    <StrategySection />
    <PoolCreateFormButton />
  </PoolCreateWrapper>
);

export default PoolCreate;
