import { Network } from '@interest-protocol/interest-aptos-v2';
import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
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
import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

import { InputProps } from '../input.types';

const SelectToken: FC<InputProps> = ({ index }) => {
  const network = useNetwork<Network>();
  const { setModal, handleClose } = useModal();
  const { setValue, control } = useFormContext<CreatePoolForm>();

  const [currentToken, tokens] = useWatch({
    control,
    name: [`tokens.${index}`, 'tokens'],
  });

  const sanitizedToken = currentToken;
  const { symbol: currentSymbol } = sanitizedToken ?? {};

  const formattedSymbol = currentSymbol ?? 'Select token';

  const onSelect = async (metadata: AssetMetadata) => {
    const otherIndex = index === 0 ? 1 : 0;
    const otherToken = tokens?.[otherIndex];

    if (metadata.type === otherToken?.type) return;

    if (
      metadata.standard === otherToken?.standard &&
      metadata.symbol === otherToken?.symbol
    ) {
      setValue(`tokens.${otherIndex}`, {
        ...currentToken,
        value: '',
        valueBN: ZERO_BIG_NUMBER,
      });
    }

    setValue(`tokens.${index}`, {
      ...metadata,
      value: '',
      valueBN: ZERO_BIG_NUMBER,
    });

    if (index === 0) {
      setValue(`tokens.1.value`, '');
      setValue(`tokens.1.valueBN`, ZERO_BIG_NUMBER);
    }
  };

  const openModal = () =>
    setModal(
      <SelectTokenModal
        onSelect={onSelect}
        closeModal={handleClose}
        isOutput={index === 1}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );

  const isTokenWithoutSymbol = !currentSymbol;

  return (
    <Button
      height="0.5rem"
      fontSize="s"
      variant="tonal"
      color="onSurface"
      borderRadius="l"
      onClick={openModal}
      bg={isTokenWithoutSymbol ? '#B4C5FF' : '#030712'}
      pl={isTokenWithoutSymbol ? '0.75rem' : '0'}
      pr="0.75rem"
      nHover={{ ...(isTokenWithoutSymbol ? { bg: '#B4C5FF' } : {}) }}
      PrefixIcon={
        !isTokenWithoutSymbol && currentSymbol ? (
          <Box mt={index === 0 ? '-0.25rem' : '0'}>
            <TokenIcon
              withBg
              size="1.25rem"
              network={network}
              symbol={currentSymbol}
              rounded={sanitizedToken?.standard === TokenStandard.COIN}
            />
          </Box>
        ) : undefined
      }
    >
      {isTokenWithoutSymbol ? (
        <Typography
          size="medium"
          variant="label"
          color="#002A78"
          fontWeight="500"
          fontFamily="Inter"
          textAlign="center"
          fontSize="0.875rem"
        >
          Select token
        </Typography>
      ) : (
        <Typography
          size="large"
          maxWidth="12ch"
          color="#9CA3AF"
          variant="label"
          overflow="hidden"
          whiteSpace="nowrap"
          fontFamily="Satoshi"
          textOverflow="ellipsis"
          width={['0px', 'auto']}
          fontWeight="500"
          display={[currentSymbol ? 'none' : 'block', 'block']}
        >
          {formattedSymbol}
        </Typography>
      )}
      <ChevronDownSVG
        maxHeight="1.25rem"
        maxWidth="1.25rem"
        width="100%"
        color={isTokenWithoutSymbol ? '#002A78' : undefined}
      />
    </Button>
  );
};

export default SelectToken;
