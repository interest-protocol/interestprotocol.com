import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import { AnimatePresence } from 'motion/react';
import { FC, useState } from 'react';

import DirectionalMenu from '@/components/directional-menu';

import Avatar from './avatar';
import MenuProfile from './menu-profile';
import { ProfileProps } from './profile.types';

const Profile: FC<ProfileProps> = ({ disconnect }) => {
  const { account } = useAptosWallet();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <Div>
      <Div
        display="flex"
        bg="#9CA3AF1A"
        cursor="pointer"
        position="relative"
        onClick={toggleMenu}
        borderRadius="0.75rem"
        flexDirection="column"
        justifyContent="center"
        nHover={{ bg: '#9CA3AF33' }}
        border="1px solid #9CA3AF1A"
        transition="all 300ms ease-in-out"
      >
        <Div gap="1rem" display="flex" alignItems="center">
          <Avatar
            withNameOrAddress
            nameOrAddressPosition="left"
            accountAddress={account?.address ?? ''}
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
