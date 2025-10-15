import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';

import { CogsSVG } from '@/components/svg';
import { useModal } from '@/hooks';
import SettingsModal from '@/views/components/settings-modal';
import { ISettings } from '@/views/components/settings-modal/settings-modal.types';

const PoolFormSectionSettings: FC = () => {
  const { setContent } = useModal();

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
  );
};

export default PoolFormSectionSettings;
