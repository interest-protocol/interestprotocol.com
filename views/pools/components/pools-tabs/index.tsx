import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

import SearchInputPool from '../search-input-pool';

const PoolsTabs: FC = () => {
  const { tab, setTab } = useTabState();
  const tabs = ['Verified pools'];

  return (
    <Div
      gap="1rem"
      width="100%"
      mb="1rem"
      display="flex"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Div display="flex">
        <Tabs tabs={tabs} setTab={setTab} tab={tab} />
      </Div>
      <Div gap="0.75rem" display="flex">
        <SearchInputPool />
      </Div>
    </Div>
  );
};

export default PoolsTabs;
