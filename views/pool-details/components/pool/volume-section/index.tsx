import { FC } from 'react';

import VolumeWrapper from '../../volume-wrapper';
import Chart from './chart';

const VolumeSection: FC = () => (
  <VolumeWrapper>
    <Chart />
  </VolumeWrapper>
);

export default VolumeSection;
