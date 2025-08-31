import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { SignOutSVG } from '@/components/svg';

import { ProfileProps } from '../profile.types';
import BottomButton from './bottom-button';
import HomeProfile from './home-profile';
import UserInfo from './user-info';

const MenuProfile: FC<ProfileProps> = ({ disconnect }) => {
  return (
    <>
      <Div
        flex="1"
        p="1.5rem"
        gap="1.5rem"
        display="flex"
        overflowY="auto"
        flexDirection="column"
      >
        <UserInfo />
        <HomeProfile />
      </Div>
      <Div
        mt="auto"
        py="1rem"
        px="1.5rem"
        gap="0.5rem"
        display="flex"
        color="#949E9E"
        flexDirection="column"
        borderTop="1px solid #FFFFFF1A"
      >
        <BottomButton
          Icon={SignOutSVG}
          title="Disconnect"
          onClick={disconnect}
        />
      </Div>
    </>
  );
};

export default MenuProfile;
