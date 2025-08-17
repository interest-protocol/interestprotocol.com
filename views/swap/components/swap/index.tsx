import { FC } from 'react';
import { Div } from '@stylin.js/elements';

import ToInput from '../input-swap/to-input';
import SwapButton from '../swap-button';
import SwapFlipToken from '../swap-flip-token';
import SwapManager from '../swap-manager';
import AdditionalInfo from './additional-info';
import InputSwap from '../input-swap';

const Swap: FC = () => (
  <>
    <Div position="relative">
      <Div
        p="1rem"
        gap="0.5rem"
        display="flex"
        bg="#9CA3AF1A"
        height="8.156rem"
        flexDirection="column"
        borderRadius="0.75rem"
      >
        <InputSwap label="from" />
      </Div>
      <Div
        my="-1rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <SwapFlipToken type="swap" />
      </Div>
      <Div
        p="1rem"
        gap="0.5rem"
        display="flex"
        bg="#9CA3AF1A"
        height="8.156rem"
        flexDirection="column"
        borderRadius="0.75rem"
      >
        <ToInput />
      </Div>
      <SwapButton />
      <AdditionalInfo />
    </Div>
    <SwapManager />
  </>
);

export default Swap;
