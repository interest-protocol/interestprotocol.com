import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { ISwapSettings } from '../swap.types';
import InputWrapper from './input-wrapper';
import SwapSettingsWrapper from './swap-setting-wrapper';

const SwapSettings: FC = () => {
  const { register } = useFormContext<ISwapSettings>();

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
      </Div>
    </SwapSettingsWrapper>
  );
};

export default SwapSettings;
