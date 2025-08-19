import { Div, Select } from '@stylin.js/elements';
import { FC } from 'react';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';

const StatsTabs: FC = () => {
  const { tab, setTab } = useTabState();
  const tabs = ['Tokens', 'Pools', 'Transitions'];

  return (
    <Div
      width="100%"
      gap="1rem"
      mb="0.75rem"
      display="flex"
      justifyContent="space-between"
      flexDirection={['column', 'row']}
    >
      <Tabs tabs={tabs} setTab={setTab} tab={tab} />
      <Div gap="0.75rem" display="flex" flexDirection={['column', 'row']}>
        <Select
          px="0.5rem"
          border="none"
          bg="#9CA3AF1A"
          color="#6B7280"
          height="2.75rem"
          cursor="pointer"
          fontSize="0.875rem"
          borderRadius="0.75rem"
          width={['100%', '8.875rem']}
        >
          <option value="1w">1W volume</option>
          <option value="1d">1D volume</option>
          <option value="1m">1M volume</option>
        </Select>

        {/* <TextField
          fontSize="medium"
          placeholder="Search pools"
          nPlaceholder={{ opacity: 0.7 }}
          fieldProps={{
            height: '2.75rem',
            borderRadius: 'xs',
            bg: '#9CA3AF1A',
            color: '#6B7280',
            borderColor: '#9CA3AF1A',
          }}
          Suffix={
            <SearchSVG
              width="100%"
              maxWidth="1rem"
              maxHeight="1rem"
              color="#6B7280"
            />
          }
        /> */}
      </Div>
    </Div>
  );
};

export default StatsTabs;
