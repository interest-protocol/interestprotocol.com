import { AptosWalletProvider } from '@razorlabs/wallet-kit';
import { type FC, type PropsWithChildren } from 'react';

import { CUSTOM_WALLETS } from '@/components/layout/header/wallet/connect-wallet/connect-wallet.data';

export const WalletProvider: FC<PropsWithChildren> = ({ children }) => (
  <AptosWalletProvider defaultWallets={Array.from(CUSTOM_WALLETS)} autoConnect>
    {children}
  </AptosWalletProvider>
);
