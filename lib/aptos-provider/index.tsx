import { type FC, type PropsWithChildren } from 'react';

import CoinsManager from '../coins-manager';
import { AptosClientProvider } from './aptos-client';
import type { AptosProviderProps } from './aptos-provider.types';
import { NetworkProvider } from './network';
import { WalletProvider } from './wallet';

export const AptosProvider: FC<PropsWithChildren<AptosProviderProps>> = ({
  children,
  networks,
  defaultNetwork,
  onChangeNetwork,
}) => (
  <NetworkProvider
    defaultNetwork={defaultNetwork}
    onChangeNetwork={onChangeNetwork}
  >
    <AptosClientProvider networks={networks}>
      <WalletProvider>
        <CoinsManager />
        {children}
      </WalletProvider>
    </AptosClientProvider>
  </NetworkProvider>
);
