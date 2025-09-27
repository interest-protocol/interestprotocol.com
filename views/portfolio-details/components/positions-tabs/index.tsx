import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

const PositionsTabs: FC = () => {
  const { tab, setTab } = useTabState();
  const tabs = ['Deposit', 'Withdraw'];

  return (
    <Div
      mb="1rem"
      gap="1rem"
      width="100%"
      display="flex"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'row', 'row']}
    >
      <Div display="flex">
        <Tabs tabs={tabs} setTab={setTab} tab={tab} />
      </Div>
    </Div>
  );
};

export default PositionsTabs;
