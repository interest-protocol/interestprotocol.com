import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { CogsSVG } from '@/components/svg';
import Tabs from '@/components/tabs';
import { useModal } from '@/hooks';
import SettingsModal from '@/views/components/settings-modal';
import { ISettings } from '@/views/components/settings-modal/settings-modal.types';

import PoolDetailsInfo from '../../pool-details-info';
import PoolFormDeposit from './pool-form/deposit';
import PoolFormWithdraw from './pool-form/withdraw';

const TABS = ['Deposit', 'Withdraw'];

const PoolFormSection: FC = () => {
  const { setContent } = useModal();

  const [poolTabs, setPoolTabs] = useState(0);
  const form = useFormContext();
  const { register } = useFormContext<ISettings>();

  const handleOpenSettings = () =>
    setContent(
      <FormProvider {...form}>
        <SettingsModal register={register} />
      </FormProvider>,
      { title: 'Settings' }
    );

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
