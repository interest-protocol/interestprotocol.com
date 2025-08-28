import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';

import {
  SearchTokenForm,
  SelectTokenModalProps,
  TokenOrigin,
} from './select-token-modal.types';
import SelectTokenModalBody from './select-token-modal-body';
import SelectTokenModalSearchInput from './select-token-modal-search-input';

const SelectTokenModal: FC<SelectTokenModalProps> = ({
  isOutput,
  onSelect,
  closeModal,
}) => {
  const form = useForm<SearchTokenForm>({
    defaultValues: {
      search: '',
      filter: TokenOrigin.Strict,
    },
  });

  const handleSelectToken = (metadata: AssetMetadata) => {
    onSelect(metadata);
    closeModal();
  };

  return (
    <FormProvider {...form}>
      <SelectTokenModalSearchInput />
      <Div flex="1" display="flex" overflowY="auto" flexDirection="column">
        <SelectTokenModalBody
          isOutput={isOutput}
          control={form.control}
          handleSelectToken={handleSelectToken}
        />
      </Div>
    </FormProvider>
  );
};

export default SelectTokenModal;
