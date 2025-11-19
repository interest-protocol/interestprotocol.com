import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { SignOutSVG } from '@/components/svg';

import BottomButton from './bottom-button';
import HomeProfile from './home-profile';
import { MenuProfileProps } from './menu-profile.types';
import UserInfo from './user-info';

const MenuProfile: FC<MenuProfileProps> = ({ onClose }) => {
  const { disconnect } = useAptosWallet();

  const handleDisconnect = () => {
    disconnect();
    onClose?.();
  };
  return (
    <>
      <Div
        flex="1"
        gap="1.5rem"
        display="flex"
        overflowY="auto"
        alignItems="center"
        p={[0, '1.5rem']}
        flexDirection="column"
      >
        <UserInfo />
        <HomeProfile />
      </Div>
      <Div
        mt="auto"
        py="1rem"
        gap="0.5rem"
        display="flex"
        color="#949E9E"
        flexDirection="column"
        px={[0, '1.5rem']}
        borderTop="1px solid #FFFFFF1A"
      >
        <BottomButton
          Icon={SignOutSVG}
          title="Disconnect"
          onClick={handleDisconnect}
        />
      </Div>
    </>
  );
};

export default MenuProfile;
