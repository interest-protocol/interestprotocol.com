import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

const PositionsTabs: FC = () => {
  const { tab, setTab } = useTabState();
  const tabs = ['Deposit', 'Withdraw'];

  return (
    <Div
      gap="1rem"
      width="100%"
      mb="1rem"
      display="flex"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'row', 'row']}
    >
      <Tabs tabs={tabs} setTab={setTab} tab={tab} />
    </Div>
  );
};

export default PositionsTabs;
