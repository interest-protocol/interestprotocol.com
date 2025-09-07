import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

import SearchInput from '../search-input';
import VolumeFilterDropdown from '../volume-filter';

const StatsTabs: FC = () => {
  const { tab, setTab } = useTabState();

  const showVolumeFilter = tab === 0;
  const shouldShowControls = showVolumeFilter || tab === 1;

  return (
    <Div
      mb="1rem"
      gap="1rem"
      width="100%"
      display="flex"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Tabs
        tab={tab}
        setTab={setTab}
        tabs={['Tokens', 'Pools', 'Transactions']}
      />

      {shouldShowControls && (
        <Div
          gap="0.75rem"
          width={['100%', '100%', '100%', 'max-content']}
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
        >
          {showVolumeFilter && <VolumeFilterDropdown />}
          <SearchInput />
        </Div>
      )}
    </Div>
  );
};

export default StatsTabs;
