import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Dropdown from '@/components/dropdown';
import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

import SearchInput from '../search-input';

const StatsTabs: FC = () => {
  const { tab, setTab } = useTabState();

  const showVolumeFilter = tab === 0;
  const shouldShowControls = showVolumeFilter || tab === 1;

  const VOLUME_FILTER_DATA = [
    { value: '1d', label: '1D volume' },
    { value: '1w', label: '1W volume' },
    { value: '1m', label: '1M volume' },
  ];

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
        <Tabs
          tab={tab}
          setTab={setTab}
          tabs={['Tokens', 'Pools', 'Transactions']}
        />
      </Div>

      {shouldShowControls && (
        <Div
          gap="0.75rem"
          display="flex"
          alignItems="center"
          flexWrap={['wrap', 'nowrap']}
          flexDirection={['row-reverse', 'row-reverse', 'row-reverse', 'row']}
        >
          {showVolumeFilter && (
            <Dropdown placeholder="Select" options={VOLUME_FILTER_DATA} />
          )}
          <SearchInput />
        </Div>
      )}
    </Div>
  );
};

export default StatsTabs;
