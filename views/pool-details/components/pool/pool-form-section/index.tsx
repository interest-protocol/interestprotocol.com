import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import Tabs from '@/components/tabs';
import { ZERO_BIG_NUMBER } from '@/utils';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import PoolDetailsInfo from '../../pool-details-info';
import PoolFormSectionSettings from './form-settings';
import PoolFormDeposit from './pool-form/deposit';
import PoolFormWithdraw from './pool-form/withdraw';
import PoolFormWithdrawOne from './pool-form/withdraw-one';

const TABS = ['Deposit', 'Withdraw', 'Withdraw one'];

const PoolFormSection: FC = () => {
  const [poolTabs, setPoolTabs] = useState(0);
  const { setValue } = useFormContext<PortfolioDetailsFormProps>();

  const onHandle = (tab: number) => {
    setPoolTabs(tab);
    setValue('lpCoin.value', '');
    setValue('lpCoin.valueBN', ZERO_BIG_NUMBER);
    setValue('tokenList.0.value', '');
    setValue('tokenList.0.valueBN', ZERO_BIG_NUMBER);
    setValue('tokenList.1.value', '');
    setValue('tokenList.1.valueBN', ZERO_BIG_NUMBER);
    setValue('selectedCoinIndex', tab === 2 ? [] : [0, 1]);
    setValue('balanced', false);
  };

  return (
    <Div
      gap="2rem"
      display="flex"
      flexDirection="column"
      mb={['0.5rem', '0.5rem', '0.5rem', 'unset']}
    >
      <Div>
        <Div
          gap="1rem"
          mb="0.75rem"
          width="100%"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Div display="flex" width="90%">
            <Tabs tabs={TABS} setTab={onHandle} tab={poolTabs} />
          </Div>

          <PoolFormSectionSettings />
        </Div>
        {
          [
            <PoolFormDeposit key={v4()} />,
            <PoolFormWithdraw key={v4()} />,
            <PoolFormWithdrawOne key={v4()} />,
          ][poolTabs]
        }
      </Div>
      <Div display={['none', 'none', 'none', 'flex']} width="100%">
        <PoolDetailsInfo />
      </Div>
    </Div>
  );
};

export default PoolFormSection;
