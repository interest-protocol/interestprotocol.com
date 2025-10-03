import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import WalletGuardButton from '@/components/wallet-guard-button';
import { useModal } from '@/hooks';

import NavbarItem from '../navbar/navbar-item';
import ConnectWalletModal from './connect-wallet';
import Profile from './profile';

const Wallet: FC = () => {
  const { setContent } = useModal();
  const { account, disconnect } = useAptosWallet();

  const connectModal = () =>
    setContent(<ConnectWalletModal />, {
      title: 'Login or Connect wallet',
      titleAlign: 'center',
      modalWidth: '24.125rem',
      showTitleOnMobile: true,
    });

  return (
    <Div
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      gap="1rem"
    >
      <Div display={['block', 'block', 'block', 'none']}>
        <NavbarItem title="Bridge" href="https://bridge.movementnetwork.xyz/" />
      </Div>
      {!account ? (
        <WalletGuardButton onClick={() => connectModal()} width="max-content">
          Connect Wallet
        </WalletGuardButton>
      ) : (
        <Profile disconnect={disconnect} />
      )}
    </Div>
  );
};

export default Wallet;
