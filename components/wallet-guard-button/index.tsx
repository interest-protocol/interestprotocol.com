import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Button, ButtonProps } from '@stylin.js/elements';
import { motion } from 'motion/react';
import { isEmpty } from 'ramda';
import { FC } from 'react';

import { useConnectWalletModal } from './connect-wallet.hook';

const MotionButton = motion(Button);

const WalletGuardButton: FC<ButtonProps> = ({ children, ...props }) => {
  const connectWalletModal = useConnectWalletModal();
  const { account, connecting, address, status } = useAptosWallet();

  if (status === 'connecting' || connecting)
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <MotionButton
        layout
        all="unset"
        px="2rem"
        py="1rem"
        bg="#B4C5FF"
        display="flex"
        cursor="pointer"
        fontWeight="500"
        textAlign="center"
        borderRadius="0.75rem"
        justifyContent="center"
        initial={{
          background: '#9CA3AF1A',
          borderColor: '#9CA3AF1A',
        }}
        animate={{
          background: '#B4C5FF',
          borderColor: 'transparent',
          transition: { duration: 0.5 },
        }}
        {...props}
        onClick={undefined}
        disabled
      >
        Connecting...
      </MotionButton>
    );

  if (isEmpty(address) || !account || isEmpty(account?.address))
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <MotionButton
        layout
        all="unset"
        px="2rem"
        py="1rem"
        display="flex"
        border="1px solid"
        fontWeight="500"
        cursor="pointer"
        textAlign="center"
        borderRadius="0.75rem"
        justifyContent="center"
        initial={{
          background: '#9CA3AF1A',
          borderColor: '#9CA3AF1A',
        }}
        animate={{
          background: '#B4C5FF',
          borderColor: 'transparent',
          transition: { duration: 0.5 },
        }}
        {...props}
        onClick={connectWalletModal}
      >
        Connect Wallet
      </MotionButton>
    );

  return children;
};

export default WalletGuardButton;
