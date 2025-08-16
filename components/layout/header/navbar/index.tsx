import { Nav } from '@stylin.js/elements';
import { FC } from 'react';

import { NavItemsTitle, Routes, RoutesEnum } from '@/constants';

import NavbarItem from './navbar-item';

const Navbar: FC = () => (
  <Nav gap="1rem" display="flex" alignItems="center" justifyContent="center">
    {Object.entries(NavItemsTitle).map(([key, title]) => (
      <NavbarItem key={key} href={Routes[key as RoutesEnum]} title={title} />
    ))}
  </Nav>
);

export default Navbar;
