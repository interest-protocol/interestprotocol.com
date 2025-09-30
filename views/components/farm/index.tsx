import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CollapseCardInfo from '@/views/components/collapse-card-info';

import { FarmProps } from './farm.types';
import FarmFormSection from './farm-form-section';
import Rewards from './rewards';

const Farm: FC<FarmProps> = ({ data }) => (
  <Div
    gap={['1rem', '1rem', '1rem', '2rem']}
    display={['flex', 'flex', 'flex', 'grid']}
    flexDirection="column-reverse"
    gridTemplateColumns="2fr 1fr"
  >
    <Div display="flex" flexDirection="column" gap="1.5rem">
      <Rewards />
      <CollapseCardInfo title="Farm Information" data={data} />
    </Div>
    <FarmFormSection />
  </Div>
);

export default Farm;
