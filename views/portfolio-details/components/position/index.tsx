import { Div } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { ZERO_BIG_NUMBER } from '@/utils';
import PoolFormDeposit from '@/views/pool-details/components/pool/pool-form-section/pool-form/deposit';
import PoolFormWithdraw from '@/views/pool-details/components/pool/pool-form-section/pool-form/withdraw';
import PoolFormWithdrawOne from '@/views/pool-details/components/pool/pool-form-section/pool-form/withdraw-one';

import { PortfolioDetailsFormProps } from '../../portfolio-details.types';
import Info from '../info';
import PositionsTabs from '../positions-tabs';

const TABS = ['Deposit', 'Withdraw', 'Withdraw one'];

const Position: FC = () => {
  const { setValue } = useFormContext<PortfolioDetailsFormProps>();
  const [tab, setTab] = useState(0);
  const [tabs, setTabs] = useState(TABS);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setTabs(TABS);
      } else {
        setTabs(TABS);
        setTab((prev) => (prev > 1 ? 0 : prev));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      gap="2.5rem"
      display="grid"
      gridTemplateColumns={['1fr', '1fr', '1fr', '2fr 1fr']}
    >
      <Info />
      <Div display="flex" flexDirection="column">
        <Div
          gap="1rem"
          mb="0.75rem"
          width="100%"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <PositionsTabs
            tab={tab}
            setTab={onHandle}
            tabs={tabs}
            total={tabs.map((t) => (t === 'Rewards' ? 2 : null))}
          />
        </Div>

        {
          [
            <PoolFormDeposit key={v4()} />,
            <PoolFormWithdraw key={v4()} />,
            <PoolFormWithdrawOne key={v4()} />,
          ][tab]
        }
      </Div>
    </Div>
  );
};

export default Position;
