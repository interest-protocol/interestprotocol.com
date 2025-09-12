import { Div, Input, Label } from '@stylin.js/elements';
import { FC } from 'react';

import { SearchSVG } from '@/components/svg';

const SearchInput: FC = () => (
  <Label
    px="1rem"
    py="0.75rem"
    width="100%"
    gap="0.5rem"
    display="flex"
    bg="#121621"
    alignItems="center"
    borderRadius="0.75rem"
    border="1px solid #9CA3AF1A"
    transition="all 500ms ease-in-out"
    nHover={{
      borderColor: '#B4C5FF',
    }}
    nFocusWithin={{
      borderColor: '#B4C5FF',
    }}
  >
    <Div p="1.5px" display="flex">
      <SearchSVG
        width="1rem"
        maxWidth="1rem"
        maxHeight="1rem"
        color="#6B7280"
      />
    </Div>
    <Input
      border="none"
      outline="none"
      fontSize="1rem"
      fontWeight="400"
      bg="transparent"
      color="#FFFFFF"
      fontFamily="Inter"
      placeholder="Search..."
      nPlaceholder={{
        color: '#6B7280',
      }}
    />
  </Label>
);

export default SearchInput;
