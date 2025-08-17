import { not } from 'ramda';
import { FC } from 'react';
import { Button, Div } from '@stylin.js/elements';
import { useFormContext, useWatch } from 'react-hook-form';

import { ISwapSettings } from '../swap.types';
import InputWrapper from './input-wrapper';
import SwapSettingsWrapper from './swap-setting-wrapper';

const SwapSettings: FC = () => {
  const { register, control, setValue } = useFormContext<ISwapSettings>();

  const [infiniteApproval] = useWatch({
    control,
    name: ['infiniteApproval'],
  });

  return (
    <SwapSettingsWrapper>
      <Div gap="0.75rem" display="flex" flexDirection="column">
        <Div display="flex" alignItems="center" justifyContent="space-between">
          <InputWrapper
            altInfo="%"
            title="Slippage tolerance"
            register={register}
            name="slippageTolerance"
          />
        </Div>
        <Div display="flex" alignItems="center" justifyContent="space-between">
          <InputWrapper
            altInfo="min"
            title="Transaction deadline"
            register={register}
            name="transactionDeadline"
          />
        </Div>
        <Div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height="2.75rem"
        >
          <InputWrapper
            altInfo="min"
            title="Infinite approval"
            Input={
              <Div
                display="flex"
                cursor="pointer"
                position="relative"
                mr="-0.5rem"
              >
                <Button
                  width="100rem"
                  name="Fixed Supply"
                  disabled={false}
                  onClick={() =>
                    setValue('infiniteApproval', not(infiniteApproval))
                  }
                />
              </Div>
            }
            register={register}
            name="infiniteApproval"
          />
        </Div>
      </Div>
    </SwapSettingsWrapper>
  );
};

export default SwapSettings;
