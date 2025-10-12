import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Button, ButtonProps } from '@stylin.js/elements';
import { isEmpty } from 'ramda';
import { FC } from 'react';

import { useConnectWalletModal } from './connect-wallet.hook';

const WalletGuardButton: FC<ButtonProps> = ({ children, ...props }) => {
  const connectWalletModal = useConnectWalletModal();
  const { account, connecting, address, status } = useAptosWallet();

  if (status === 'connecting' || connecting)
    return (
      <Button
        all="unset"
        px="2rem"
        py="1rem"
        display="flex"
        bg="#B4C5FF"
        cursor="pointer"
        fontWeight="500"
        textAlign="center"
        borderRadius="0.75rem"
        justifyContent="center"
        {...props}
        onClick={undefined}
        disabled
      >
        Connecting...
      </Button>
    );

  if (isEmpty(address) || !account || isEmpty(account?.address))
    return (
      <Button
        all="unset"
        px="2rem"
        py="1rem"
        display="flex"
        bg="#B4C5FF"
        fontWeight="500"
        cursor="pointer"
        textAlign="center"
        borderRadius="0.75rem"
        justifyContent="center"
        {...props}
        onClick={connectWalletModal}
      >
        Connect Wallet
      </Button>
    );

  return children;
};

export default WalletGuardButton;
