import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks/use-tab-manager';
import { ZERO_BIG_NUMBER } from '@/utils';
import APR from '@/views/components/apr';

import { PortfolioDetailsFormProps } from '../../portfolio-details.types';

const PositionsDetailsTabs: FC = () => {
  const { setValue } = useFormContext<PortfolioDetailsFormProps>();
  const { tab, setTab } = useTabState();
  const tabs = ['Your Position', 'Farm'];

  const onHandle = (tab: number) => {
    setTab(tab);
    setValue('lpCoin.value', '');
    setValue('lpCoin.valueBN', ZERO_BIG_NUMBER);
    setValue('tokenList.0.value', '');
    setValue('tokenList.0.valueBN', ZERO_BIG_NUMBER);
    setValue('tokenList.1.value', '');
    setValue('tokenList.1.valueBN', ZERO_BIG_NUMBER);
    setValue('selectedCoinIndex', [0, 1]);
    setValue('balanced', false);
  };

  return (
    <Div
      mb="1rem"
      gap="1rem"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Div width="100%">
        <Div width={['100%', '60%', '60%', '100%']} display="flex">
          <Tabs
            tab={tab}
            tabs={tabs}
            setTab={onHandle}
            color={['#B4C5FF33', '#B4C5FF33', '#B4C5FF33', '#9CA3AF1A']}
          />
        </Div>
      </Div>
      {tab === 1 && (
        <Div width={['100%', '100%', '100%', 'auto']}>
          <APR />
        </Div>
      )}
    </Div>
  );
};

export default PositionsDetailsTabs;
