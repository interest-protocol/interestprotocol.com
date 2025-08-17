import { Button, Div, P } from '@stylin.js/elements';
import { ChangeEvent, FC } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import unikey from 'unikey';

import { PercentageSVG } from '@/components/svg';
import { TextField } from '@/components/text-field';
import { LOCAL_STORAGE_VERSION } from '@/constants';
import { parseInputEventToNumberString } from '@/utils';

import { ISwapSettings } from '../../swap.types';
import { ManageSlippageFormProps } from '../manage-slippage-form.types';

const SLIPPAGE_BUTTONS = ['0.5', '1', '2'];

const ManageSlippageForm: FC<ManageSlippageFormProps> = ({
  handleManageView,
}) => {
  const { getValues, setValue } = useFormContext();

  const formTmpSettings = useForm<ISwapSettings>({
    defaultValues: getValues('settings'),
  });

  const setTolerance = (value: string) =>
    formTmpSettings.setValue('slippage', value);

  const onConfirm = () => {
    setValue('settings.slippage', formTmpSettings.getValues('slippage'));

    localStorage.setItem(
      `${LOCAL_STORAGE_VERSION}-movement-dex-settings`,
      JSON.stringify({ slippage: formTmpSettings.getValues('slippage') })
    );

    handleManageView?.();
  };

  return (
    <Div gap="l" p="m" pt="unset" display="flex" flexDirection="column">
      <Div>
        <P mb="0.5rem">Slippage Tolerance</P>
        <Div
          gap="s"
          flexDirection="column"
          gridTemplateColumns="4fr repeat(3, auto)"
          display={['flex', 'flex', 'flex', 'grid']}
        >
          <TextField
            fontSize="1rem"
            placeholder="0.1"
            fontFamily="Satoshi"
            {...formTmpSettings.register('slippage', {
              onChange: (v: ChangeEvent<HTMLInputElement>) => {
                formTmpSettings.setValue?.(
                  'slippage',
                  parseInputEventToNumberString(v)
                );
              },
            })}
            fieldProps={{
              borderRadius: 'xs',
              mr: 'xs',
              width: ['100%', '100%', '100%', '114%'],
            }}
            Suffix={
              <Div display="flex">
                <PercentageSVG
                  maxHeight="1.25rem"
                  maxWidth="1.25rem"
                  width="100%"
                />
              </Div>
            }
          />
          {SLIPPAGE_BUTTONS.map((item) => (
            <Button
              py="2xs"
              key={unikey()}
              borderRadius="xs"
              onClick={() => setTolerance(item)}
            >
              <P width="100%">{item} %</P>
            </Button>
          ))}
        </Div>
      </Div>
      <Div display="flex" gap="0.5rem" justifyContent="flex-end">
        <Button
          px="l"
          py="s"
          borderRadius="xs"
          bg="rgba(0, 0, 0, 0.08)"
          onClick={handleManageView}
        >
          Cancel
        </Button>
        <Button borderRadius="xs" onClick={onConfirm}>
          <P width="100%">Confirm</P>
        </Button>
      </Div>
    </Div>
  );
};

export default ManageSlippageForm;
