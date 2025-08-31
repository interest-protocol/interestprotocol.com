import { Div } from '@stylin.js/elements';
import { AnimatePresence } from 'motion/react';
import { FC, useState } from 'react';

import DirectionalMenu from '@/components/directional-menu';

import Avatar from './avatar';
import MenuProfile from './menu-profile';
import { ProfileProps } from './profile.types';

const Profile: FC<ProfileProps> = ({ disconnect }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  return (
    <Div>
      <Div
        display="flex"
        cursor="pointer"
        flexDirection="column"
        justifyContent="center"
        bg={'#9CA3AF1A'}
        position={'relative'}
        borderRadius="0.75rem"
        border="1px solid #9CA3AF1A"
        nHover={{
          bg: '#9CA3AF33',
        }}
        transition="all 300ms ease-in-out"
        onClick={toggleMenu}
      >
        <Div gap="1rem" display={'flex'} alignItems="center">
          <Avatar
            withNameOrAddress
            nameOrAddressPosition="left"
            accountAddress="0xb5mc...0da6"
          />
        </Div>
      </Div>
      <AnimatePresence>
        {open && (
          <DirectionalMenu onClose={toggleMenu} isDirectionalRight>
            <MenuProfile disconnect={disconnect} />
          </DirectionalMenu>
        )}
      </AnimatePresence>
    </Div>
  );
};

export default Profile;
