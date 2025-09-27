import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { TokenStandard } from '@/lib/coins-manager/coins-manager.types';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import { InputProps } from '../input.types';

const SelectedToken: FC<InputProps> = ({ index }) => {
  const { control } = useFormContext<PortfolioDetailsFormProps>();

  const [currentToken] = useWatch({
    control,
    name: [`tokenList.${index}`],
  });

  const sanitizedToken = currentToken;
  const { symbol: currentSymbol } = sanitizedToken ?? {};

  const formattedSymbol = currentSymbol ?? 'Select token';

  const isTokenWithoutSymbol = !currentSymbol;

  return (
    <Button
      gap="0.5rem"
      pr="0.75rem"
      display="flex"
      height="2rem"
      border="none"
      cursor="pointer"
      fontSize="0.75rem"
      alignItems="center"
      borderRadius="1.25rem"
      pl={isTokenWithoutSymbol ? '0.75rem' : '0'}
      bg={isTokenWithoutSymbol ? '#B4C5FF' : '#030712'}
      nHover={{ ...(isTokenWithoutSymbol ? { bg: '#B4C5FF' } : {}) }}
    >
      <Div mt={index === 0 ? '-0.25rem' : '0'}>
        <TokenIcon
          withBg
          size="1.25rem"
          symbol={currentSymbol}
          rounded={sanitizedToken?.standard === TokenStandard.COIN}
          network={Network.MovementMainnet}
        />
      </Div>
      <P
        maxWidth="12ch"
        color="#9CA3AF"
        overflow="hidden"
        fontWeight="500"
        whiteSpace="nowrap"
        fontFamily="Inter"
        textOverflow="ellipsis"
        width="auto"
        display="block"
      >
        {formattedSymbol}
      </P>
    </Button>
  );
};

export default SelectedToken;
