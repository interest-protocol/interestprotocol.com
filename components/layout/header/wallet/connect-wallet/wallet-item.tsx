import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { WalletItemProps } from './connect-wallet.types';

const WalletItem: FC<WalletItemProps> = ({
  downloadUrl,
  name,
  label,
  iconUrl,
  handleConnect,
  isInstalled,
}) => {
  const { allAvailableWallets } = useAptosWallet();

  return (
    <Div
      p="0.5rem"
      gap="0.5rem"
      display="flex"
      bg="#222222"
      borderRadius="1rem"
      justifyContent="space-between"
      transition="all 300ms ease-in-out"
      onClick={() =>
        handleConnect(
          allAvailableWallets.length ? name : downloadUrl.browserExtension || ''
        )
      }
      nHover={{
        background: '#2e2d2dff',
        cursor: 'pointer',
      }}
    >
      <Div display="flex" alignItems="center" gap="0.5rem">
        <Div width="2.5rem" height="2.5rem">
          <img
            src={iconUrl}
            alt={label}
            width="100%"
            style={{ borderRadius: '0.75rem' }}
          />
        </Div>
        <Span
          fontSize="1rem"
          fontWeight="400"
          fontFamily="Inter"
          lineHeight="1.25rem"
          color="#E4E7E7"
        >
          {label}
        </Span>
      </Div>
      <Div
        p="5px"
        my="auto"
        display="flex"
        bg={isInstalled ? '#1F3A28' : '#9CA3AF33'}
        borderRadius="4px"
        alignItems="center"
        height="max-content"
      >
        <Span
          fontWeight="700"
          color={isInstalled ? '#26D962' : '#9CA3AF'}
          fontSize="0.625rem"
          lineHeight="0.8rem"
          letterSpacing="-0.2px"
          textTransform="uppercase"
        >
          {`${isInstalled ? '' : 'Not'} Installed`}
        </Span>
      </Div>
    </Div>
  );
};

export default WalletItem;
