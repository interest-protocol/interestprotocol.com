import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';

import { CogsSVG } from '@/components/svg';
import Tabs from '@/components/tabs';

import FarmForm from './farm-form';

const FarmFormSection: FC = () => {
  const [farmTabs, setFarmTabs] = useState(0);
  const tabs = ['Stake', 'Unstake'];

  const toggleFarm = (tabIndex: number) => {
    setFarmTabs(tabIndex);
  };

  return (
    <Div>
      <Div
        gap="1rem"
        mb="0.75rem"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
      >
        <Div display="flex">
          <Tabs tabs={tabs} setTab={toggleFarm} tab={farmTabs} />
        </Div>
        <Div
          cursor="pointer"
          color="#9CA3AF"
          nHover={{
            color: '#B4C5FF',
          }}
        >
          <CogsSVG maxWidth="1.25rem" maxHeight="1.25rem" width="1.25rem" />
        </Div>
      </Div>
      <FarmForm />
    </Div>
  );
};

export default FarmFormSection;
