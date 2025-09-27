import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CollapseCardInfo from '../../components/collapse-card-info';
import { FARM_INFORMATION_DATA } from '../pools.data';
import FarmFormSection from './farm-form-section';
import Rewards from './rewards';

const Farm: FC = () => (
  <Div
    gap={['2.5rem', '2.5rem', '2.5rem', '2.5rem']}
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
