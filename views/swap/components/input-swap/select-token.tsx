import { FC } from 'react';
import { Network } from '@interest-protocol/interest-aptos-v2';
import { useFormContext, useWatch } from 'react-hook-form';

import { ChevronDownSVG } from '@/components/svg';
import TokenIcon from '@/components/token-icon';
import { useModal } from '@/hooks/use-modal';
import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';
import {
  AssetMetadata,
  TokenStandard,
} from '@/lib/coins-manager/coins-manager.types';
import { ZERO_BIG_NUMBER } from '@/utils';
import SelectTokenModal from '@/views/components/select-token-modal';

import { InputProps } from './input.types';
import { Button, Div, P } from '@stylin.js/elements';

const SelectToken: FC<InputProps> = ({ label }) => {
  const network = useNetwork<Network>();
  const { setContent, handleClose } = useModal();
  const { setValue, control } = useFormContext();

  const [currentToken, type, swapping, opposite] = useWatch({
    control,
    name: [
      label,
      `${label}.type`,
      'swapping',
      `${label === 'to' ? 'from' : 'to'}`,
    ],
  });

  const sanitizedToken = currentToken;

  const { symbol: currentSymbol } = sanitizedToken ?? {};

  const formattedSymbol = currentSymbol ?? type ?? 'Select token';

  const onSelect = async (metadata: AssetMetadata) => {
    if (metadata.type === opposite?.type) return;

    if (
      metadata.standard === opposite?.standard &&
      metadata.symbol === opposite?.symbol
    ) {
      setValue(label === 'to' ? 'from' : 'to', {
        ...currentToken,
        value: '',
      });
    }

    setValue(label, {
      ...metadata,
      value: '',
      valueBN: ZERO_BIG_NUMBER,
      manuallySelected: true,
    });

    if (label === 'from') {
      setValue('to.value', '');
      setValue('to.valueBN', ZERO_BIG_NUMBER);
    }
  };

  const openModal = () =>
    !swapping &&
    setContent(
      <SelectTokenModal
        onSelect={onSelect}
        closeModal={handleClose}
        isOutput={label === 'to'}
      />, { title: 'Select Token' }
    );

  const isToWithoutToken = label === 'to' && !currentSymbol;

  return (
    <Button
      bg="#030712"
      pr="0.75rem"
      border="none"
      display="flex"
      gap="0.5rem"
      height="2rem"
      fontSize="s"
      color="onSurface"
      alignItems="center"
      disabled={swapping}
      onClick={openModal}
      cursor="pointer"
      opacity={swapping ? 0.7 : 1}
      borderRadius="1000px"
      nHover={{ ...(isToWithoutToken ? { bg: '#B4C5FF' } : {}) }}
    >
      {!isToWithoutToken && currentSymbol && (
        <Div mt={label === 'from' ? '-0.25rem' : '0'}>
          <TokenIcon
            withBg
            size="1.25rem"
            network={network}
            symbol={currentSymbol}
            rounded={sanitizedToken?.standard === TokenStandard.COIN}
          />
        </Div>
      )}

      {isToWithoutToken ? (
        <P
          color="#002A78"
          fontWeight="500"
          fontFamily="Inter"
          textAlign="center"
          fontSize="0.875rem"
        >
          Select token
        </P>
      ) : (
        <P
          maxWidth="12ch"
          color="#9CA3AF"
          overflow="hidden"
          whiteSpace="nowrap"
          fontFamily="Inter"
          textOverflow="ellipsis"
          width={['0px', 'auto']}
          fontWeight="500"
          display={[currentSymbol ? 'none' : 'block', 'block']}
        >
          {formattedSymbol}
        </P>
      )}

      <ChevronDownSVG
        width="100%"
        color="#FFFFFF"
        maxHeight="0.62625rem"
        maxWidth="0.62625rem"
      />
    </Button>
  );
};

export default SelectToken;
