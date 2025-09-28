import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import VolumeChart from '@/components/volume-chart';
import { VOLUME_DATA } from '@/components/volume-chart/volume-chart.data';

import PoolDetailsInfo from '../pool-details-info';
import VolumeWrapper from '../volume-wrapper';
import MyPositionList from './my-position-list';

const V3: FC = () => {
  return (
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
        <VolumeWrapper>
          <Div width="100%" height={['7.4rem', '7.4rem', '7.4rem', '17rem']}>
            <VolumeChart data={VOLUME_DATA} />
          </Div>
        </VolumeWrapper>
        <MyPositionList />
        <PoolDetailsInfo />
      </Div>
      <Div bg="green" p="1rem"></Div>
    </Div>
  );
};

export default V3;
