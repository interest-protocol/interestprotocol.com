import { Div } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import PoolFormDeposit from '@/views/pool-details/components/pool/pool-form-section/pool-form/deposit';
import PoolFormWithdraw from '@/views/pool-details/components/pool/pool-form-section/pool-form/withdraw';

import Info from '../info';
import PositionsTabs from '../positions-tabs';

const Position: FC = () => {
  const [tab, setTab] = useState(0);
  const [tabs, setTabs] = useState(['Deposit', 'Withdraw']);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setTabs(['Deposit', 'Withdraw', 'Rewards']);
      } else {
        setTabs(['Deposit', 'Withdraw']);
        setTab((prev) => (prev > 1 ? 0 : prev));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Div
      gap="2.5rem"
      display="grid"
      gridTemplateColumns={['1fr', '1fr', '1fr', '2fr 1fr']}
    >
      <Info />
      <Div gap="0.75rem" display="flex" flexDirection="column">
        <PositionsTabs
          tab={tab}
          setTab={setTab}
          tabs={tabs}
          total={tabs.map((t) => (t === 'Rewards' ? 2 : null))}
        />
        {[<PoolFormDeposit key={v4()} />, <PoolFormWithdraw key={v4()} />][tab]}
      </Div>
    </Div>
  );
};

export default Position;
