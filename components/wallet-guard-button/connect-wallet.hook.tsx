import { useModal } from '@/hooks/use-modal';

import ConnectWalletModal from '../layout/header/wallet/connect-wallet';

export const useConnectWalletModal = () => {
  const { setContent } = useModal();

  const handleOpenConnectModal = () =>
    setContent(<ConnectWalletModal />, {
      title: 'Login or Connect wallet',
      titleAlign: 'center',
      modalWidth: '24.125rem',
      showTitleOnMobile: true,
    });

  return handleOpenConnectModal;
};
