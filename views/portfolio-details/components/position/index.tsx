import { Div } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import Deposit from '../deposit';
import PoolDetailsHeader from '../header';
import Info from '../info';
import PositionsTabs from '../positions-tabs';
import Rewards from '../rewards';
import Withdraw from '../withdraw';

const Position: FC = () => {
  const [tab, setTab] = useState(0);
  const [tabs, setTabs] = useState(['Deposit', 'Withdraw']);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setTabs(['Deposit', 'Withdraw', 'Rewards']);
      } else {
        setTabs(['Deposit', 'Withdraw']);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <PoolDetailsHeader />
      <Div
        gap="2.5rem"
        display="grid"
        gridTemplateColumns={['1fr', '1fr', '1fr', '2fr 1fr']}
      >
        <Info />
        <Div gap="0.75rem" display="flex" flexDirection="column">
          <PositionsTabs tab={tab} setTab={setTab} tabs={tabs} />
          {
            [
              <Deposit key={v4()} />,
              <Withdraw key={v4()} />,
              <Div
                display={['flex', 'none']}
                flexDirection="column"
                key={v4()}
                my="-2rem"
              >
                <Rewards
                  claimingFee="18%"
                  pairToken={[
                    { value: 0.0, symbol: 'MOVE', iconUrl: '/eth.png' },
                    { value: 0.0, symbol: 'MOVE', iconUrl: '/usdt.png' },
                  ]}
                />
              </Div>,
            ][tab]
          }
        </Div>
      </Div>
    </>
  );
};

export default Position;
