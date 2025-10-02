import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';

import { CogsSVG } from '@/components/svg';
import Tabs from '@/components/tabs';
import { useModal } from '@/hooks';

import SettingsModal from '../../settings-modal';
import { ISettings } from '../../settings-modal/settings-modal.types';
import FarmForm from './farm-form';

const TABS = ['Stake', 'Unstake'];

const FarmFormSection: FC = () => {
  const { setContent } = useModal();
  const [farmTabs, setFarmTabs] = useState(0);

  const form = useFormContext();
  const { register } = useFormContext<ISettings>();

  const handleOpenSettings = () =>
    setContent(
      <FormProvider {...form}>
        <SettingsModal register={register} />
      </FormProvider>,
      { title: 'Settings' }
    );

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
          <Tabs tabs={TABS} setTab={toggleFarm} tab={farmTabs} />
        </Div>

        <Div
          role="button"
          lineHeight="0"
          display="flex"
          cursor="pointer"
          color="#9CA3AF"
          alignItems="center"
          aria-label="Settings"
          onClick={handleOpenSettings}
          transition="transform 500ms ease-in-out"
          nHover={{ transform: 'rotate(180deg)', color: '#B4C5FF' }}
        >
          <CogsSVG maxWidth="1.25rem" maxHeight="1.25rem" width="100%" />
        </Div>
      </Div>
      <FarmForm isStake={farmTabs === 0} />
    </Div>
  );
};

export default FarmFormSection;
