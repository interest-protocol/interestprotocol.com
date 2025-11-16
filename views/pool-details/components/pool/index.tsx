import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import PoolDetailsInfo from '../pool-details-info';
import PoolFormSection from './pool-form-section';
import TransactionList from './transactions-list';
import VolumeSection from './volume-section';

const Pool: FC = () => (
  <Div
    gap={['1rem', '1rem', '1rem', '2rem']}
    display={['flex', 'flex', 'flex', 'grid']}
    flexDirection="column-reverse"
    gridTemplateColumns="1fr 23rem"
  >
    <Div
      display="flex"
      flexDirection="column"
      gap={['1rem', '1rem', '1rem', '2rem']}
    >
      <VolumeSection />
      <Div display={['flex', 'flex', 'flex', 'none']} width="100%">
        <PoolDetailsInfo />
      </Div>

      <TransactionList />
    </Div>
    <PoolFormSection />
  </Div>
);

export default Pool;
