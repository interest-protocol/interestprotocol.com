import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import PoolBalance from '../pool-balance';
import Chart from './chart';
import SummaryHeader from './summary-header';

const VolumeSection: FC = () => {
  return (
    <>
      <Div
        key={v4()}
        flexWrap="wrap"
        flexDirection="column"
        display={['flex', 'flex', 'flex', 'none']}
      >
        <PoolBalance />
      </Div>
      <Div
        p="1rem"
        gap="1rem"
        display="flex"
        bg="#9CA3AF0D"
        flexDirection="column"
        borderRadius="0.5rem"
        border="1px solid #1F2937"
      >
        <SummaryHeader />
        <Chart />
      </Div>
    </>
  );
};

export default VolumeSection;
