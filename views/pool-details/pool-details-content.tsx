import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useTabState } from '@/hooks';

import Farm from '../components/farm';
import PoolDetailsHeaderSummary from './components/header-summary';
import Pool from './components/pool';
import V3 from './components/v3';
import { PoolDetailsProps } from './pool-details.types';

const PoolDetailsContent: FC<PoolDetailsProps> = ({ isV3 }) => {
  const { tab } = useTabState();

  return (
    <Div
      mb="4rem"
      display="flex"
      flexDirection="column"
      gap={['1rem', '1rem', '1rem', '2rem']}
      mt={['1rem', '1rem', '1rem', '2.5rem']}
    >
      <PoolDetailsHeaderSummary isV3={isV3} />
      {isV3 ? <V3 /> : [<Pool key={v4()} />, <Farm key={v4()} />][tab]}
    </Div>
  );
};

export default PoolDetailsContent;
