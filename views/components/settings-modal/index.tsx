import { Div, Input, Label, P } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/button';
import { toasting } from '@/components/toast';
import { useModal } from '@/hooks/use-modal';

import { SettingsModalProps } from './settings-modal.types';

const SettingsModal: FC<SettingsModalProps> = ({ register }) => {
  const { handleClose } = useModal();

  return (
    <Div gap="0.75rem" display="flex" flexDirection="column">
      <Div display="flex" alignItems="center" justifyContent="space-between">
        <P
          color="#9CA3AF"
          fontSize="1rem"
          fontWeight="400"
          fontFamily="Inter"
          lineHeight="1.5rem"
        >
          Slippage tolerance
        </P>
        <Label
          px="1rem"
          gap="0.15rem"
          bg="#202123"
          display="flex"
          alignItems="center"
          borderRadius="12px"
          transition="all 500ms ease-in-out"
          border="1px solid #9CA3AF1F"
          nHover={{
            border: '1px solid #B4C5FF',
          }}
        >
          <Input
            py="0.75rem"
            width="6rem"
            border="none"
            outline="none"
            bg="transparent"
            color="#FFFFFF"
            placeholder="0.5"
            textAlign="right"
            fontWeight="400"
            fontSize="1rem"
            type="number"
            className="remove-spinner"
            {...register('slippageTolerance')}
          />
          <Label color="#9CA3AF">%</Label>
        </Label>
      </Div>
      <Div
        flex="1"
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
      >
        <Button
          width="100%"
          border="none"
          variant="filled"
          fontFamily="Inter"
          fontSize="1rem"
          height={['1.5rem', '2rem']}
          nHover={{
            bg: '#8BA5FF',
          }}
          onClick={() => {
            toasting.success({
              action: 'Settings changed',
            });
            handleClose();
          }}
        >
          Confirm
        </Button>
      </Div>
    </Div>
  );
};

export default SettingsModal;
