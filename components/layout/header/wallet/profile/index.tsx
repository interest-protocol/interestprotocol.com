import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import { AnimatePresence } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

import DirectionalMenu from '@/components/directional-menu';
import { useModal } from '@/hooks';

import Avatar from './avatar';
import MenuProfile from './menu-profile';
import { ProfileProps } from './profile.types';

const Profile: FC<ProfileProps> = ({ disconnect }) => {
  const { account } = useAptosWallet();
  const { setContent } = useModal();
  const [open, setOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpen = () => {
    if (isMobile) {
      setContent(<MenuProfile disconnect={disconnect} />, {
        title: 'Profile',
        mobileOnly: true,
      });
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Div>
      <Div
        display="flex"
        bg="#9CA3AF1A"
        cursor="pointer"
        position="relative"
        onClick={handleOpen}
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
          <DirectionalMenu onClose={handleClose} isDirectionalRight>
            <MenuProfile disconnect={disconnect} />
          </DirectionalMenu>
        )}
      </AnimatePresence>
    </Div>
  );
};

export default Profile;
