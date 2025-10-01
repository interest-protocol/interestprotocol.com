import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { CogsSVG } from '@/components/svg';
import Tabs from '@/components/tabs';

import PoolDetailsInfo from '../../pool-details-info';
import PoolFormDeposit from './pool-form/deposit';
import PoolFormWithdraw from './pool-form/withdraw';

const TABS = ['Deposit', 'Withdraw'];

const PoolFormSection: FC = () => {
  const [poolTabs, setPoolTabs] = useState(0);

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
          <Div display="flex">
            <Tabs tabs={TABS} setTab={setPoolTabs} tab={poolTabs} />
          </Div>
          <Div cursor="pointer" color="#9CA3AF" nHover={{ color: '#B4C5FF' }}>
            <CogsSVG maxWidth="1.25rem" maxHeight="1.25rem" width="1.25rem" />
          </Div>
        </Div>
        {
          [<PoolFormDeposit key={v4()} />, <PoolFormWithdraw key={v4()} />][
            poolTabs
          ]
        }
      </Div>
      <Div display={['none', 'none', 'none', 'flex']} width="100%">
        <PoolDetailsInfo />
      </Div>
    </Div>
  );
};

export default PoolFormSection;
