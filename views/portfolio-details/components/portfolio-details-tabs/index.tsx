import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

const PositionsDetailsTabs: FC = () => {
  const { tab, setTab } = useTabState();
  const tabs = ['Your Position'];

  return (
    <Div
      mb="1rem"
      gap="1rem"
      width="100%"
      display="flex"
      justifyContent="space-between"
    >
      <Tabs tabs={tabs} setTab={setTab} tab={tab} color="#B4C5FF33" />
    </Div>
  );
};

export default PositionsDetailsTabs;
