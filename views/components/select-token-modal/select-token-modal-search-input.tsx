import { Div, Input, Label } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { SearchSVG } from '@/components/svg';
import { TextField } from '@/components/text-field';

import { SearchTokenForm } from './select-token-modal.types';
import SelectTokenFilter from './select-token-modal-filter';
import SelectTokenModalSearchInputSuffix from './select-token-modal-search-input-suffix';

const SelectTokenModalSearchInput: FC = () => {
  const { register } = useFormContext<SearchTokenForm>();

  return (
    <Div display="flex" flexDirection="column" gap="1rem">
      <Div>
        <Label
          px="1rem"
          gap="0.5rem"
          bg="#202123"
          display="flex"
          alignItems="center"
          borderRadius="12px"
          transition="all 500ms ease-in-out"
          border="1px solid #9CA3AF1F"
          nHover={{
            border: '2px solid #B4C5FF',
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
            placeholder="Search token"
            fontWeight="400"
            fontSize="1rem"
            {...register('search')}
          />
        </Label>
        <TextField
          {...register('search')}
          placeholder="Search token"
          fieldProps={{
            borderRadius: '0.75rem',
            px: '1rem',
            mx: '0.5rem',
            gap: '0.5rem',
            bg: '#FFFFFF1A',
            alignItems: 'center',
            display: 'none',
          }}
          fontFamily="Inter"
          Prefix={
            <Div mr="0.5rem" display="flex" color="#6B7280" alignItems="center">
              <SearchSVG width="100%" maxWidth="1.25rem" maxHeight="1.25rem" />
            </Div>
          }
          Suffix={<SelectTokenModalSearchInputSuffix />}
        />
      </Div>
      <SelectTokenFilter />
    </Div>
  );
};

export default SelectTokenModalSearchInput;
