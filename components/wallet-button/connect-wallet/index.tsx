import { Button, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { useConnectWalletModal } from './connect-wallet.hook';

const ConnectWallet: FC = () => {
  const connectWalletModal = useConnectWalletModal();

  return (
    <Button
      all="unset"
      bg="#B4C5FF"
      display="flex"
      color="#000000"
      cursor="pointer"
      position="relative"
      alignItems="center"
      borderRadius="0.75rem"
      gap={['0.5rem', '1rem']}
      py={['0.75rem', '1rem']}
      px={['0.75rem', '2rem']}
      backdropFilter="blur(16px)"
      onClick={connectWalletModal}
    >
      <Span fontWeight="500">
        Connect <Span display={['none', 'inline']}>Wallet</Span>
      </Span>
    </Button>
  );
};

export default ConnectWallet;
