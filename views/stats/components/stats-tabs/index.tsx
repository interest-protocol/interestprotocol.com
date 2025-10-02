import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

const StatsTabs: FC = () => {
  const { tab, setTab } = useTabState();

  return (
    <Div
      mb="1rem"
      gap="1rem"
      width="100%"
      display="flex"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Div display="flex">
        <Tabs tab={tab} setTab={setTab} tabs={['Pools', 'Transactions']} />
      </Div>
    </Div>
  );
};

export default StatsTabs;
