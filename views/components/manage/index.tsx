import { Div, Span } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { ManageProps } from './manage.types';

const Manage: FC<ManageProps> = ({ url }) => (
  <Div display="flex" justifyContent="flex-end" width="100%">
    <Link href={url} title="pool name">
      <Span
        width="100%"
        display="block"
        fontWeight="400"
        color="#B4C5FF"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.12rem"
      >
        Manage
      </Span>
    </Link>
  </Div>
);

export default Manage;
