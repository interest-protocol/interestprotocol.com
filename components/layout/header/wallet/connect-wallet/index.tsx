import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div, Hr, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { GoogleSVG } from '@/components/svg';

import { CUSTOM_WALLETS } from './connect-wallet.data';
import WalletItem from './wallet-item';

const ConnectWalletModal: FC = () => {
  const { allAvailableWallets, select } = useAptosWallet();

  const handleConnect = async (name: string) => {
    if (!allAvailableWallets.length)
      return window.open(name, '_blank')?.focus();

    await select(name);
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
      <Div
        py="1rem"
        px="0.5rem"
        gap="0.5rem"
        display="flex"
        bg="#222222"
        borderRadius="1rem"
        justifyContent="center"
        transition="all 300ms ease-in-out"
        nHover={{
          background: '#2e2d2dff',
          cursor: 'pointer',
        }}
      >
        <Div width="1.5rem" height="1.5rem">
          <GoogleSVG maxHeight="100%" maxWidth="100%" width="100%" />
        </Div>
        <Span fontSize="1rem" fontWeight="600" lineHeight="1.5rem">
          Continue with Google
        </Span>
      </Div>
      <Div display="flex" justifyContent="space-between" alignItems="center">
        <Hr height="1px" border="none" flex="1" bg="#9CA3AF33" />
        <Span
          color="#9CA3AF33"
          fontSize="0.875rem"
          lineHeight="1.25rem"
          px="0.6rem"
        >
          Or
        </Span>
        <Hr height="1px" border="none" flex="1" bg="#9CA3AF33" />
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
