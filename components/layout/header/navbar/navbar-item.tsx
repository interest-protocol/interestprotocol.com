import { Li } from '@stylin.js/elements';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import ExternalLink from '@/components/svg/external-link';
import { Routes } from '@/constants';

import { NavbarItemProps } from './navbar.types';

const NavbarItem: FC<NavbarItemProps> = ({ title, href }) => {
  const { asPath } = useRouter();
  const isBridge = href === Routes.bridge;

  return (
    <Link href={href} target={isBridge ? '_blank' : '_self'}>
      <Li
        display="flex"
        alignItems="center"
        fontSize="1rem"
        cursor="pointer"
        height="1.375rem"
        borderRadius="0.5rem"
        fontFamily="Inter"
        width="max-content"
        lineHeight="1.5rem"
        alignContent="center"
        gap={['0.2rem', '1rem']}
        textTransform="capitalize"
        nHover={{ color: '#fff' }}
        transition="all 350ms ease-in-out"
        fontWeight={asPath === href ? '500' : '400'}
        color={asPath === href ? '#fff' : '#9CA3AF'}
      >
        {title}
        {isBridge && (
          <ExternalLink
            maxWidth="1rem"
            maxHeight="1rem"
            width="100%"
            color="#9CA3AF"
          />
        )}
      </Li>
    </Link>
  );
};

export default NavbarItem;
