import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import WalletGuardButton from '@/components/wallet-guard-button';

import NavbarItem from '../navbar/navbar-item';
import Profile from './profile';

const Wallet: FC = () => (
  <Div display="flex" justifyContent="flex-end" alignItems="center" gap="1rem">
    <Div display={['block', 'block', 'block', 'none']}>
      <NavbarItem title="Bridge" href="https://bridge.movementnetwork.xyz/" />
    </Div>
    <WalletGuardButton width="max-content">
      <Profile />
    </WalletGuardButton>
  </Div>
);

export default Wallet;
