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
  const style = label == 'to' && isToWithoutToken;

  return (
    <Button
      display="flex"
      alignItems="center"
      gap="0.5rem"
      height="0.5rem"
      fontSize="s"
      color="onSurface"
      borderRadius="l"
      disabled={swapping}
      onClick={openModal}
      bg={style ? '#B4C5FF' : '#030712'}
      pl={style ? '0.75rem' : '0'}
      pr="0.75rem"
      opacity={swapping ? 0.7 : 1}
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
          fontFamily="Satoshi"
          textOverflow="ellipsis"
          width={['0px', 'auto']}
          fontWeight="500"
          display={[currentSymbol ? 'none' : 'block', 'block']}
        >
          {formattedSymbol}
        </P>
      )}

      <ChevronDownSVG
        maxHeight="1.25rem"
        maxWidth="1.25rem"
        width="100%"
        color={isToWithoutToken ? '#002A78' : undefined}
      />
    </Button>
  );
};

export default SelectToken;
