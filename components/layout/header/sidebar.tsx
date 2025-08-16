import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { ChevronDownSVG, LogoLettersSVG, LogoSVG } from '@/components/svg';

const Sidebar: FC = () => {
  return (
    <Div>
      <Div
        p="1rem"
        display="flex"
        gap="0.825rem"
        color="#F8F9FD"
        alignItems="center"
      >
        <LogoSVG maxWidth="1.75rem" width="100%" />
        <LogoLettersSVG maxHeight="1.25rem" height="100%" />
        <Span color="#9CA3AF">
          <ChevronDownSVG maxWidth="0.825rem" width="100%" />
        </Span>
      </Div>
    </Div>
  );
};
export default Sidebar;
