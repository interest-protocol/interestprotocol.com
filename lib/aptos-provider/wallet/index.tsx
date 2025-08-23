import { AptosWalletProvider } from '@razorlabs/wallet-kit';
import { FC, PropsWithChildren } from 'react';

export const WalletProvider: FC<PropsWithChildren> = ({ children }) => (
  <AptosWalletProvider autoConnect>{children}</AptosWalletProvider>
);
