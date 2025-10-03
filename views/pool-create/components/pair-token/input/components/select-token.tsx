import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { ChevronDownSVG } from '@/components/svg';
import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { useModal } from '@/hooks/use-modal';
import {
  AssetMetadata,
  TokenStandard,
} from '@/lib/coins-manager/coins-manager.types';
import { ZERO_BIG_NUMBER } from '@/utils';
import SelectTokenModal from '@/views/components/select-token-modal';
import {
  CreatePoolForm,
  InputProps,
} from '@/views/pool-create/pool-create.types';

const SelectToken: FC<InputProps> = ({ index }) => {
  const { setContent, handleClose } = useModal();
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
    setContent(
      <SelectTokenModal
        onSelect={onSelect}
        closeModal={handleClose}
        isOutput={index === 1}
      />,
      {
        title: 'Select Token',
        titleAlign: 'left',
      }
    );

  const isTokenWithoutSymbol = !currentSymbol;

  return (
    <Button
      border="none"
      display="flex"
      height="2rem"
      gap="0.5rem"
      pr="0.75rem"
      alignItems="center"
      fontSize="0.75rem"
      onClick={openModal}
      cursor="pointer"
      borderRadius="1.25rem"
      pl={isTokenWithoutSymbol ? '0.75rem' : '0'}
      bg={isTokenWithoutSymbol ? '#B4C5FF' : '#030712'}
      nHover={{ ...(isTokenWithoutSymbol ? { bg: '#B4C5FF' } : {}) }}
    >
      {!isTokenWithoutSymbol && currentSymbol && (
        <Div mt={index === 0 ? '-0.25rem' : '0'}>
          <TokenIcon
            withBg
            size="1.25rem"
            network={Network.MovementMainnet}
            symbol={currentSymbol}
            rounded={sanitizedToken?.standard === TokenStandard.COIN}
          />
        </Div>
      )}
      {isTokenWithoutSymbol ? (
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
          fontWeight="500"
          whiteSpace="nowrap"
          fontFamily="Inter"
          textOverflow="ellipsis"
          width={['0px', 'auto']}
          display={[currentSymbol ? 'none' : 'block', 'block']}
        >
          {formattedSymbol}
        </P>
      )}
      <Div
        border="none"
        display="flex"
        width="1.25rem"
        cursor="pointer"
        height="1.25rem"
        alignItems="center"
        justifyContent="center"
      >
        <ChevronDownSVG
          width="100%"
          maxHeight="0.361rem"
          maxWidth="0.62625rem"
          color={isTokenWithoutSymbol ? '#002A78' : '#FFFFFF'}
        />
      </Div>
    </Button>
  );
};

export default SelectToken;
