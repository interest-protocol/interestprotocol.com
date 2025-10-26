import { AptosWalletProvider, useAptosWallet } from '@razorlabs/wallet-kit';
import { type FC, type PropsWithChildren, useEffect, useState } from 'react';

import { CUSTOM_WALLETS } from '@/components/layout/header/wallet/connect-wallet/connect-wallet.data';

const WalletManager: FC = () => {
  const [wallet, setWallet] = useState<string | null>(null);
  const { account, adapter, disconnect, select, name } = useAptosWallet();

  useEffect(() => {
    adapter?.features['aptos:onAccountChange'].onAccountChange((newAccount) => {
      if (newAccount.address.toString() === account?.address) return;

      disconnect().then(() => setWallet(name as string));
    });
  }, [adapter]);

  useEffect(() => {
    if (wallet) {
      select('Nightly');
      setWallet(null);
    }
  }, [wallet]);

  return null;
};

export const WalletProvider: FC<PropsWithChildren> = ({ children }) => (
  <AptosWalletProvider defaultWallets={Array.from(CUSTOM_WALLETS)} autoConnect>
    <WalletManager />
    {children}
  </AptosWalletProvider>
);
