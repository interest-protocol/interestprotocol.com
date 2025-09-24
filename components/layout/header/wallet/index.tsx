import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/button';
import { useModal } from '@/hooks';

import ConnectWalletModal from './connect-wallet';
import Profile from './profile';

const Wallet: FC = () => {
  const { setContent } = useModal();
  const { connected, disconnect } = useAptosWallet();

  const connectModal = () =>
    setContent(<ConnectWalletModal />, {
      title: 'Login or Connect wallet',
    });

  return (
    <Div display="flex" justifyContent="flex-end">
      {!connected ? (
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
