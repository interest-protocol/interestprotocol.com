import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const CurrentPrice: FC = () => {
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();

  const lpCoin = getValues('lpCoin');
  return (
    <Div display="flex" flexDirection="column" gap="4px">
      <P
        fontWeight="400"
        color="#9CA3AF"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.25rem"
      >
        Current Price
      </P>
      <Div display="flex" gap="0.5rem" alignItems="center">
        <TokenIcon
          withBg
          size="1rem"
          url={lpCoin.iconUri}
          symbol={lpCoin.symbol}
          network={Network.MovementMainnet}
        />
        <Span
          color="#FFF"
          fontSize="1rem"
          fontWeight="500"
          fontFamily="Inter"
          lineHeight="1.25rem"
        >
          {lpCoin.value || '0.00'}
        </Span>
        <Span
          fontWeight="400"
          color="#9CA3AF"
          fontFamily="Inter"
          fontSize="0.875rem"
          lineHeight="1.25rem"
        >
          {lpCoin.symbol}
        </Span>
      </Div>
    </Div>
  );
};

export default CurrentPrice;
