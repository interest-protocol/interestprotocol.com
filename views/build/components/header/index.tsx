import { Header as HeaderHTML } from '@stylin.js/elements';
import { FC } from 'react';

import { LogoLettersSVG, LogoSVG } from '@/components/svg';

const Header: FC = () => (
  <HeaderHTML
    zIndex="1"
    py="1rem"
    display="flex"
    alignItems="center"
    justifyContent="center"
    gap="1rem"
  >
    <LogoSVG maxWidth="1.75rem" color="#F8F9FD" />
    <LogoLettersSVG maxWidth="6rem" maxHeight="1.25rem" color="#F8F9FD" />
  </HeaderHTML>
);

export default Header;
