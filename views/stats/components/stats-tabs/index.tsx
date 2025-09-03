import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { SearchSVG } from '@/components/svg';
import Tabs from '@/components/tabs';
import { TextField } from '@/components/text-field';
import { useTabState } from '@/hooks/use-tab-manager';

import Select from '../select';

const StatsTabs: FC = () => {
  const { tab, setTab } = useTabState();
  const tabs = ['Tokens', 'Pools', 'Transactions'];

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

      {tab === 0 && (
        <Div gap="0.75rem" display="flex" flexDirection={['column', 'row']}>
          <Select />
          <TextField
            gap="1rem"
            fontSize="1rem"
            placeholder="Search tokens"
            nPlaceholder={{ opacity: 0.7 }}
            fieldProps={{
              height: '2.75rem',
              bg: '#9CA3AF1A',
              color: '#6B7280',
              borderRadius: '0.5rem',
              borderColor: '#9CA3AF1A',
            }}
            Prefix={
              <SearchSVG
                width="100%"
                maxWidth="1rem"
                maxHeight="1rem"
                color="#6B7280"
              />
            }
          />
        </Div>
      )}

      {tab === 1 && (
        <Div gap="0.75rem" display="flex">
          <TextField
            gap="1rem"
            fontSize="1rem"
            placeholder="Search pools"
            nPlaceholder={{ opacity: 0.7 }}
            fieldProps={{
              height: '2.75rem',
              bg: '#9CA3AF1A',
              color: '#6B7280',
              borderRadius: '0.5rem',
              borderColor: '#9CA3AF1A',
            }}
            Prefix={
              <SearchSVG
                width="100%"
                maxWidth="1rem"
                maxHeight="1rem"
                color="#6B7280"
              />
            }
          />
        </Div>
      )}
    </Div>
  );
};

export default StatsTabs;
