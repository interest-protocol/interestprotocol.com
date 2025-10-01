import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/button';
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
        <Button
          all="unset"
          px="2rem"
          py="1rem"
          bg="#B4C5FF"
          fontWeight="500"
          cursor="pointer"
          variant="filled"
          width="fit-content"
          borderRadius="1rem"
          onClick={() => connectModal()}
        >
          Connect Wallet
        </Button>
      ) : (
        <Profile disconnect={disconnect} />
      )}
    </Div>
  );
};

export default Wallet;
