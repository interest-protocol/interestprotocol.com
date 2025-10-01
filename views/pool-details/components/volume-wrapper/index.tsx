import { Div } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';
import { v4 } from 'uuid';

import PoolBalance from '../pool-balance';
import SummaryHeader from './summary-header';

const VolumeWrapper: FC<PropsWithChildren> = ({ children }) => (
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
      {children}
    </Div>
  </>
);

export default VolumeWrapper;
