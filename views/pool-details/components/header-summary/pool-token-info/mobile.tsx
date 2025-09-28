import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { TokenIcon } from '@/components';
import Tag from '@/components/tag';
import { Network } from '@/constants';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const PoolTokenInfoMobile: FC = () => {
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();

  const lpCoin = getValues('lpCoin');
  const tokenList = getValues('tokenList');
  return (
    <Div
      justifyContent="space-between"
      display={['flex', 'flex', 'flex', 'none']}
    >
      <Div gap="0.5rem" display="flex" alignItems="center">
        <TokenIcon
          withBg
          size="1rem"
          url={lpCoin.iconUri}
          symbol={lpCoin.symbol}
          network={Network.MovementMainnet}
        />
        <P
          fontWeight="600"
          color="#E5E7EB"
          fontFamily="Inter"
          fontSize="1.25rem"
          lineHeight="1.875rem"
        >
          {`${tokenList[0].symbol}-${tokenList[1].symbol}`}
        </P>
      </Div>
      <Div display="flex" gap="0.5rem" alignItems="center">
        <P
          fontWeight="500"
          color="#949E9E"
          fontSize="0.875rem"
          lineHeight="1.25rem"
        >
          APR
        </P>
        <Tag label="29.17%" type="success" />
      </Div>
    </Div>
  );
};

export default PoolTokenInfoMobile;
