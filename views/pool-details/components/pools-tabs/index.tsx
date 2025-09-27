import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

import CreatePoolButton from '../create-pool-button';
import FindPool from '../find-pool';
import SearchInputPool from '../searc-input-pool';

const PoolsTabs: FC = () => {
  const { tab, setTab } = useTabState();
  const tabs = ['Verified pools', 'Features Pools'];

  return (
    <Div
      gap="1rem"
      width="100%"
      mb="1rem"
      display="flex"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'row', 'row']}
    >
      <Div>
        <Tabs tabs={tabs} setTab={setTab} tab={tab} />
      </Div>

      <Div gap="0.75rem" display="flex">
        <SearchInputPool />
        <FindPool />
        <CreatePoolButton />
      </Div>
    </Div>
  );
};

export default PoolsTabs;
