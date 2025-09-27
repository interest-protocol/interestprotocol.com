import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useTabState } from '@/hooks';

import Farm from './farm';
import PoolDetailsHeaderSummary from './header-summary';
import Pool from './pool';

const PoolDetailsContent: FC = () => {
  const { tab } = useTabState();

  return (
    <Div
      mb="4rem"
      gap="1rem"
      display="flex"
      flexDirection="column"
      mt={['1rem', '1rem', '1rem', '2.5rem']}
    >
      <PoolDetailsHeaderSummary />
      {[<Pool key={v4()} />, <Farm key={v4()} />][tab]}
    </Div>
  );
};

export default PoolDetailsContent;
