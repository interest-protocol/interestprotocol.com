import { Network } from '@interest-protocol/interest-aptos-v2';
import { FC, PropsWithChildren } from 'react';

import { INDEXER_URL, RPC_URL } from '@/constants';
import { AptosProvider } from '@/lib/aptos-provider';
import CoinsManager from '@/lib/coins-manager';
import ModalProvider from '../modal-provider';

const Provider: FC<PropsWithChildren> = ({ children }) => (
    <AptosProvider
        defaultNetwork={Network.MovementMainnet}
        networks={[
            {
                network: Network.MovementMainnet,
                rpc: RPC_URL[Network.MovementMainnet],
                indexer: INDEXER_URL[Network.MovementMainnet],
            },
        ]}
    >
        <CoinsManager />
        <ModalProvider />
        {children}
    </AptosProvider>
);

export default Provider;
