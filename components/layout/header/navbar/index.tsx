import { Nav } from '@stylin.js/elements';
import { FC } from 'react';

import { NavItemsTitle, Routes, RoutesEnum } from '@/constants';

import NavbarItem from './navbar-item';

const Navbar: FC = () => (
  <Nav
    py="1rem"
    px="2rem"
    gap="2rem"
    display="flex"
    borderRadius="2rem"
    alignItems="center"
    justifyContent="center"
    transition="all 350ms ease-in-out"
    nHover={{
      bg: '#9CA3AF33',
      backdropFilter: 'blur(8px)',
      boxShadow: '0px 0px 0px 1px #9CA3AF4D',
    }}
  >
    {Object.entries(NavItemsTitle).map(([key, title]) => (
      <NavbarItem key={key} href={Routes[key as RoutesEnum]} title={title} />
    ))}
  </Nav>
);

export default Navbar;
