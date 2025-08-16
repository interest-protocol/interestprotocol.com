import { Div, P } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';
import unikey from 'unikey';

import { SidebarLogoSVG } from '@/components/svg';

import { SIDEBAR_SECTIONS } from '../../sidebar.data';
import { SOCIAL_LINK } from '../../social-link.data';
import SidebarSection from './sidebar-section';

const SidebarContent: FC = () => (
  <>
    <Div>
      <Div mb="m">
        <SidebarLogoSVG maxWidth="40" maxHeight="40" />
      </Div>

      {SIDEBAR_SECTIONS.map((section) => (
        <SidebarSection key={section.title} section={section} />
      ))}
    </Div>
    <Div mb={['0.5rem', '0.5rem', '0.5rem', '0']}>
      <P
        mb="m"
        color="#FFFFFF"
        fontWeight="600"
        fontFamily="Inter"
        fontSize="0.75rem"
        lineHeight="1.5rem"
      >
        Social
      </P>

      <Div display="flex" gap="1.5rem">
        {SOCIAL_LINK.map(({ title, pathname, Icon }) => (
          <Link
            key={unikey()}
            href={pathname}
            target="_blank"
            rel="noreferrer"
            title={`Follow us on ${title}`}
          >
            <Div
              width="1.5rem"
              height="1.5rem"
              color="#9CA3AF"
              transition="0.3s"
              nHover={{ color: '#B4C5FF' }}
            >
              <Icon
                width="100%"
                maxWidth="100%"
                cursor="pointer"
                maxHeight="100%%"
              />
            </Div>
          </Link>
        ))}
      </Div>
    </Div>
  </>
);

export default SidebarContent;
