import { Div, Input, Label } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { SearchSVG } from '@/components/svg';

import { SearchTokenForm } from './select-token-modal.types';
import SelectTokenFilter from './select-token-modal-filter';
import SelectTokenModalSearchInputSuffix from './select-token-modal-search-input-suffix';

const SelectTokenModalSearchInput: FC = () => {
  const { register } = useFormContext<SearchTokenForm>();

  return (
    <Div display="flex" flexDirection="column" gap="1rem">
      <Div position="relative" width="100%">
        <Label
          px="1rem"
          gap="0.5rem"
          bg="#202123"
          display="flex"
          alignItems="center"
          borderRadius="12px"
          transition="all 500ms ease-in-out"
          border="1px solid #9CA3AF1F"
          width="100%"
          nHover={{
            border: '1px solid #9CA3AF',
          }}
        >
          <Label color="#FFFFFF80" pt="0.3rem">
            <SearchSVG maxWidth="1.25rem" maxHeight="1.25rem" width="100%" />
          </Label>
          <Input
            py="0.75rem"
            width="100%"
            border="none"
            outline="none"
            bg="transparent"
            color="#FFFFFF"
            fontWeight="400"
            fontSize="1rem"
            placeholder="Search token"
            pr="2rem"
            {...register('search')}
          />
        </Label>
        <Div
          position="absolute"
          top="50%"
          right="1rem"
          transform="translateY(-50%)"
          display="flex"
          alignItems="center"
        >
          <SelectTokenModalSearchInputSuffix />
        </Div>
      </Div>
      <SelectTokenFilter />
    </Div>
  );
};

export default SelectTokenModalSearchInput;
