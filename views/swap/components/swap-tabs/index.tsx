import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';

import { CogsSVG } from '@/components/svg';
import Tabs from '@/components/tabs';
import { useModal } from '@/hooks/use-modal';
import { noop } from '@/utils';
import { ISeetings } from '@/views/components/settings-modal/settings-modal.types';

import SettingsModal from '../../../components/settings-modal';

const SwapTabs: FC = () => {
  const { setContent } = useModal();
  const form = useFormContext();
  const { register } = useFormContext<ISeetings>();

  const handleOpenSettings = () =>
    setContent(
      <FormProvider {...form}>
        <SettingsModal register={register} />
      </FormProvider>,
      { title: 'Settings' }
    );

  return (
    <Div
      display="flex"
      mb="0.75rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Span
        color="#FFFFFF"
        fontWeight="500"
        fontFamily="Inter"
        lineHeight="1.5rem"
        fontSize="1.125rem"
        display={['block', 'none']}
      >
        Swap
      </Span>
      <Div display={['none', 'block']}>
        <Div display="flex" flexWrap="wrap">
          <Tabs tabs={['Swap']} setTab={noop} tab={0} />
        </Div>
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
  );
};

export default SwapTabs;
