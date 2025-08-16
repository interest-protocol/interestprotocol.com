import { Li } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { NavbarItemProps } from './navbar.types';

const NavbarItem: FC<NavbarItemProps> = ({ title, href }) => (
  <Link href={href}>
    <Li>{title}</Li>
  </Link>
);

export default NavbarItem;
