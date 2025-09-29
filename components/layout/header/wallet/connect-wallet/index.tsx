import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { toasting } from '@/components/toast';
import { useModal } from '@/hooks';

import { CUSTOM_WALLETS } from './connect-wallet.data';
import WalletItem from './wallet-item';

const ConnectWalletModal: FC = () => {
  const { handleClose } = useModal();
  const { allAvailableWallets, select } = useAptosWallet();

  const handleConnect = async (name: string) => {
    if (!allAvailableWallets.length)
      return window.open(name, '_blank')?.focus();

    const dismiss = toasting.loading({ message: 'Connecting...' });
    try {
      await select(name);
    } catch (e) {
      toasting.error({
        action: 'Connect wallet',
        message: (e as Error).message ?? 'Error connecting wallet',
      });
    } finally {
      dismiss();
      handleClose();
    }
  };

  const WALLETS = !allAvailableWallets.length
    ? CUSTOM_WALLETS
    : allAvailableWallets;

  return (
    <Div display="flex" flexDirection="column" gap="1rem">
      <Div>
        <P
          fontSize="0.875rem"
          lineHeight="1.125rem"
          fontFamily="Inter"
          color="#949E9E"
          fontWeight="400"
        >
          Login with one of your socials to start interacting on Interest
          Protocol
        </P>
      </Div>
      <Div display="flex" flexDirection="column" gap="0.5rem">
        {WALLETS.map((wallet) => (
          <WalletItem
            {...wallet}
            key={v4()}
            isInstalled={allAvailableWallets.some(
              (currentWallet) => currentWallet.name == wallet.name
            )}
            handleConnect={handleConnect}
          />
        ))}
      </Div>
      <Div>
        <P
          fontSize="0.875rem"
          fontWeight="600"
          lineHeight="1.125rem"
          fontFamily="Inter"
          textAlign="center"
          color="#949E9E"
        >
          By connecting your wallet you agree to our{' '}
          <a href="/" target="_blank">
            <Span color="#B4C5FF" cursor="pointer">
              Terms of Service
            </Span>
          </a>{' '}
          and our{' '}
          <a href="/" target="_blank">
            <Span color="#B4C5FF" cursor="pointer">
              Privacy policy
            </Span>
          </a>
        </P>
      </Div>
    </Div>
  );
};

export default ConnectWalletModal;
