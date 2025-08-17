import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';

import Motion from '@/components/motion';
import { CogsSVG } from '@/components/svg';
import Tabs from '@/components/tabs';
import { useModal } from '@/hooks/use-modal';
import { useTabState } from '@/hooks/use-tab-manager';

import SwapSettings from '../swap-settings';

const SwapTabs: FC = () => {
  const { tab, setTab } = useTabState();
  const tabs = ['Swap', 'Bridge'];

  const { setContent, handleClose } = useModal();
  const form = useFormContext();

  const handleOpenSettings = () =>
    setContent(
      <FormProvider {...form}>
        <Div
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          display="flex"
          position="fixed"
          zIndex={2}
          alignItems="center"
          justifyContent="center"
          backdropFilter="blur(10px)"
          onClick={() => handleClose()}
        >
          <Motion
            animate={{ scale: 1 }}
            initial={{ scale: 0.85 }}
            transition={{ duration: 0.3 }}
          >
            <SwapSettings />
          </Motion>
        </Div>
      </FormProvider>,
      { title: 'Settings' }
    );

  const handleSetTab = (index: number) => {
    if (index === 1) {
      window.open('https://bridge.movementnetwork.xyz/', '_blank');
      return;
    }
    setTab(index);
  };

  return (
    <Div
      display="flex"
      mb="0.75rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Tabs tabs={tabs} setTab={handleSetTab} tab={tab} />
      <Div
        role="button"
        lineHeight="0"
        display="flex"
        cursor="pointer"
        color="onSurface"
        alignItems="center"
        aria-label="Settings"
        onClick={handleOpenSettings}
        transition="transform 500ms ease-in-out"
        nHover={{ transform: 'rotate(180deg)' }}
      >
        <CogsSVG maxWidth="1.25rem" maxHeight="1.25rem" width="100%" />
      </Div>
    </Div>
  );
};

export default SwapTabs;
