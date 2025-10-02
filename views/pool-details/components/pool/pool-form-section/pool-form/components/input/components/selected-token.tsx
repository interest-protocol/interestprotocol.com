import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';

import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import {
  PortfolioDetailsFormProps,
  PortfolioDetailsToken,
} from '@/views/portfolio-details/portfolio-details.types';

import { InputProps } from '../input.types';

const SelectedToken: FC<InputProps> = ({ field, Suffix }) => {
  const { control } = useFormContext<PortfolioDetailsFormProps>();

  const [currentToken] = useWatch({
    control,
    name: [field as keyof PortfolioDetailsFormProps],
  });

  const sanitizedToken = currentToken as PortfolioDetailsToken;
  const { symbol: currentSymbol } = sanitizedToken ?? {};

  const formattedSymbol = currentSymbol ?? 'Select token';

  const isTokenWithoutSymbol = !currentSymbol;

  return isTokenWithoutSymbol ? (
    <Skeleton height="1.5rem" width="6rem" />
  ) : (
    <>
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
        <Div>
          <TokenIcon
            withBg
            rounded
            size="1.25rem"
            symbol={currentSymbol}
            network={Network.MAINNET}
            url={sanitizedToken?.iconUri}
          />
        </Div>
        <P
          width="auto"
          display="block"
          maxWidth="12ch"
          overflow="hidden"
          fontWeight="500"
          color="#9CA3AF"
          fontFamily="Inter"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {formattedSymbol}
        </P>
      </Button>
      {Suffix}
    </>
  );
};

export default SelectedToken;
