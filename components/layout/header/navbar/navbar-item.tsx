import { Li } from '@stylin.js/elements';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { NavbarItemProps } from './navbar.types';

const NavbarItem: FC<NavbarItemProps> = ({ title, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <Li
        display="flex"
        fontSize="1rem"
        cursor="pointer"
        height="1.375rem"
        borderRadius="xs"
        alignItems="center"
        fontFamily="Inter"
        width="max-content"
        lineHeight="1.5rem"
        alignContent="center"
        textTransform="capitalize"
        nHover={{ color: '#fff' }}
        transition="all 350ms ease-in-out"
        fontWeight={asPath === href ? '500' : '400'}
        color={asPath === href ? '#fff' : '#9CA3AF'}
      >
        {title}
      </Li>
    </Link>
  );
};

export default NavbarItem;
