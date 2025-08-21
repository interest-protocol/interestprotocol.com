import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Motion from '@/components/motion';
import { TimesSVG } from '@/components/svg';
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
    <Div
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      zIndex="9999"
      position="fixed"
      display="flex"
      alignItems="center"
      onClick={closeModal}
      justifyContent="center"
    >
      <Motion
        animate={{ scale: 1 }}
        initial={{ scale: 0.85 }}
        transition={{ duration: 0.3 }}
      >
        <FormProvider {...form}>
          <Motion
            layout
            gap="1rem"
            bg="#121313"
            height="auto"
            display="flex"
            maxWidth="32rem"
            maxHeight="90vh"
            padding="1.25rem"
            borderRadius="1rem"
            flexDirection="column"
            width={['90vw', '32rem']}
            transition={{ duration: 0.3 }}
            border="1px solid #FFFFFF1A"
            onClick={(e) => e.stopPropagation()}
          >
            <Div
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <P
                color="#FFFFFF"
                fontWeight="700"
                fontFamily="Inter"
                lineHeight="1.5rem"
                fontSize="1.125rem"
              >
                Select Token
              </P>
              <Button
                mr="0.1rem"
                border="none"
                bg="transparent"
                onClick={closeModal}
                cursor="pointer"
              >
                <TimesSVG
                  maxWidth="0.8rem"
                  maxHeight="0.8rem"
                  width="100%"
                  color="#9CA3AF"
                />
              </Button>
            </Div>

            <SelectTokenModalSearchInput />
            <Div
              flex="1"
              bg="#121313"
              display="flex"
              overflowY="auto"
              flexDirection="column"
            >
              <SelectTokenModalBody
                isOutput={isOutput}
                control={form.control}
                handleSelectToken={handleSelectToken}
              />
            </Div>
          </Motion>
        </FormProvider>
      </Motion>
    </Div>
  );
};

export default SelectTokenModal;
