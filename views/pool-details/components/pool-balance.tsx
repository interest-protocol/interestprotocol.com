import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const PoolBalance: FC = () => {
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();

  const tokenList = getValues('tokenList');
  return (
    <Div
      key={v4()}
      gap="0.75rem"
      flexWrap="wrap"
      display="flex"
      justifyContent={[
        'space-between',
        'space-between',
        'space-between',
        'flex-end',
      ]}
      flexDirection={['row', 'row', 'row', 'column']}
      alignItems={['center', 'center', 'center', 'unset']}
    >
      <Span
        fontWeight="400"
        color="#9CA3AF"
        textAlign="right"
        fontSize="0.875rem"
        lineHeight={['1.25rem', '1.25rem', '1.25rem', '1.75rem']}
      >
        Pool Balance
      </Span>
      <Div
        display="flex"
        gap="0.5rem"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Div display="flex" gap="0.5rem">
          <TokenIcon
            withBg
            size="1rem"
            url={tokenList[0].iconUri}
            symbol={tokenList[0].symbol}
            network={Network.MovementMainnet}
          />
          <Span
            color="#fff"
            fontWeight="500"
            lineHeight={['2rem', '2rem', '2rem', '1.75rem']}
            fontSize={['1.125rem', '1.125rem', '1.125rem', '0.875rem']}
          >
            76.45%
          </Span>
        </Div>
        <Div height="4px" width="4px" bg="#fff" borderRadius="10px" />
        <Div display="flex" gap="0.5rem">
          <TokenIcon
            withBg
            size="1rem"
            url={tokenList[1].iconUri}
            symbol={tokenList[1].symbol}
            network={Network.MovementMainnet}
          />
          <Span
            color="#fff"
            fontWeight="500"
            lineHeight={['2rem', '2rem', '2rem', '1.75rem']}
            fontSize={['1.125rem', '1.125rem', '1.125rem', '0.875rem']}
          >
            76.45%
          </Span>
        </Div>
      </Div>
    </Div>
  );
};

export default PoolBalance;
