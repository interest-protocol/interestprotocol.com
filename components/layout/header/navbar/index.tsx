import { Nav } from '@stylin.js/elements';
import { FC } from 'react';

import ExternalLink from '@/components/svg/external-link';
import { NavItemsTitle, Routes, RoutesEnum } from '@/constants';

import NavbarItem from './navbar-item';

const Navbar: FC = () => (
  <Nav
    py="1rem"
    px="2rem"
    gap="2rem"
    zIndex="3"
    position="relative"
    borderRadius="2rem"
    alignItems="center"
    justifyContent="center"
    transition="all 350ms ease-in-out"
    nHover={{
      bg: '#9CA3AF33',
      backdropFilter: 'blur(8px)',
      boxShadow: '0px 0px 0px 1px #9CA3AF4D',
    }}
    display={['none', 'none', 'none', 'flex', 'flex']}
  >
    {Object.entries(NavItemsTitle).map(([key, title]) => (
      <NavbarItem key={key} href={Routes[key as RoutesEnum]} title={title} />
    ))}
    <a
      href="Bridge"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
    >
      <ExternalLink
        maxWidth="1rem"
        maxHeight="1rem"
        width="100%"
        color="#9CA3AF"
      />
    </a>
  </Nav>
);

export default Navbar;
