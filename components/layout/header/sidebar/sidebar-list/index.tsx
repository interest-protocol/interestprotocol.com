import { Div, P } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { ExternalLinkSVG } from '@/components/svg';

import { ISidebarListProps } from './sidebar-list.types';

const SidebarList: FC<ISidebarListProps> = ({ items }) => {
  const normalizeItems = items.map((item) =>
    typeof item === 'string'
      ? { label: item, href: '#', isExternal: false }
      : item
  );

  return (
    <Div p="0" m="0" display="flex" flexDirection="column" gap="0.75rem">
      {normalizeItems.map(({ label, href, isExternal }) => (
        <Div
          key={label}
          borderRadius="s"
          cursor="pointer"
          nHover={{ bg: 'surfaceContainerHighest' }}
        >
          {isExternal ? (
            <Link href={href} rel="noreferrer" target="_blank">
              <Div
                gap="0.5rem"
                display="flex"
                color="#9CA3AF"
                alignItems="center"
                transition="0.3s"
                textDecoration="none"
                nHover={{ color: '#B4C5FF' }}
              >
                <P
                  fontWeight="600"
                  fontSize="0.75rem"
                  fontFamily="Inter"
                  lineHeight="1.5rem"
                >
                  {label}
                </P>
                <ExternalLinkSVG
                  maxWidth="1rem"
                  maxHeight="1rem"
                  width="100%"
                />
              </Div>
            </Link>
          ) : (
            <Link href={href}>
              <Div display="flex" alignItems="center" textDecoration="none">
                <P
                  color="#9CA3AF"
                  fontWeight="600"
                  fontSize="0.75rem"
                  fontFamily="Inter"
                  lineHeight="1.5rem"
                  nHover={{ color: '#B4C5FF' }}
                >
                  {label}
                </P>
              </Div>
            </Link>
          )}
        </Div>
      ))}
    </Div>
  );
};

export default SidebarList;
