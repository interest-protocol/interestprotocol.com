import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CollapseCardInfo from '@/views/components/collapse-card-info';
import Rewards from '@/views/components/rewards';

import { FARM_INFORMATION_DATA } from '../../pools.data';
import FarmFormSection from './farm-form-section';

const Farm: FC = () => (
  <Div
    gap={['1rem', '1rem', '1rem', '2rem']}
    display={['flex', 'flex', 'flex', 'grid']}
    flexDirection="column-reverse"
    gridTemplateColumns="2fr 1fr"
  >
    <Div display="flex" flexDirection="column" gap="1.5rem">
      <Rewards />
      <CollapseCardInfo title="Fam Information" data={FARM_INFORMATION_DATA} />
    </Div>
    <FarmFormSection />
  </Div>
);

export default Farm;
