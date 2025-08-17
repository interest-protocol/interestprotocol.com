import { FC } from 'react';
import { Div } from '@stylin.js/elements';
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
        <TextField
          {...register('search')}
          placeholder="Search token"
          fieldProps={{
            borderRadius: '0.75rem',
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
