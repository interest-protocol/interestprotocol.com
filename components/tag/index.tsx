import { FC } from 'react';
import { v4 } from 'uuid';

import { Button } from '@/components/Button';

import { TAG_COLOR } from './tag.data';
import { TagProps } from './tag.types';

const Tag: FC<TagProps> = ({ type, label, onClick }) => (
  <Button
    key={v4()}
    px="0.5rem"
    py="0.25rem"
    variant="filled"
    fontWeight="500"
    lineHeight="1rem"
    onClick={onClick}
    fontSize="0.75rem"
    border="1px solid"
    bg={TAG_COLOR[type].bg}
    textTransform="capitalize"
    color={TAG_COLOR[type].color}
    borderColor={TAG_COLOR[type].color}
    nHover={{
      borderColor: TAG_COLOR[type].bg,
      fontWeight: 'bold',
    }}
  >
    {label || type}
  </Button>
);

export default Tag;
