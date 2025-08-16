import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import SidebarList from '../sidebar-list';
import { ISidebarSectionProps } from './sidebar-section.types';

const SidebarSection: FC<ISidebarSectionProps> = ({ section }) => {
  if (section.items.length === 0) return null;

  return (
    <Div mb="1.75rem">
      <P
        mb="8px"
        color="#FFF"
        fontWeight="600"
        fontFamily="Inter"
        fontSize="0.75rem"
        lineHeight="1.5rem"
      >
        {section.title}
      </P>
      <SidebarList items={section.items} />
    </Div>
  );
};

export default SidebarSection;
