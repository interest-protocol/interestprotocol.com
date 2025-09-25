import { IDefaultWallet } from '@razorlabs/wallet-kit';

export type WalletItemProps = IDefaultWallet & {
  handleConnect: (name: string) => Promise<void>;
  isInstalled?: boolean;
};
