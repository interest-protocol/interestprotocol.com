import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/Button';

import { ManageProps } from './manage.types';

const Manage: FC<ManageProps> = ({ url }) => (
  <Div display="flex" justifyContent="flex-end" width="100%">
    <Link href={url} title="pool name">
      <Button
        p="unset"
        gap="0.2rem"
        border="none"
        variant="text"
        fontWeight="400"
        color="#B4C5FF"
        fontSize="0.875rem"
        lineHeight="1.12rem"
        nHover={{
          color: '#b4c6ffc1',
        }}
      >
        Manage
      </Button>
    </Link>
  </Div>
);

export default Manage;
