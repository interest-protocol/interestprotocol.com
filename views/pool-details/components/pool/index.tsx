import { Div, Hr } from '@stylin.js/elements';
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
    gridTemplateColumns="2fr 1fr"
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
      <Hr
        border="1px solid #F3F4F61A"
        display={['none', 'none', 'none', 'flex']}
      />
      <TransactionList />
    </Div>
    <PoolFormSection />
  </Div>
);

export default Pool;
