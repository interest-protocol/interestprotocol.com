import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const PoolTokenInfoDesktop: FC = () => {
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();

  const lpCoin = getValues('lpCoin');
  const tokenList = getValues('tokenList');
  return (
    <Div
      gap="1rem"
      alignItems="center"
      display={['none', 'none', 'none', 'flex']}
    >
      <TokenIcon
        withBg
        size="1.52rem"
        url={lpCoin.iconUri}
        symbol={lpCoin.symbol}
        network={Network.MovementMainnet}
      />
      <P
        fontWeight="600"
        color="#E5E7EB"
        fontFamily="Inter"
        fontSize="1.75rem"
        lineHeight="2.8125rem"
      >
        {`${tokenList[0].symbol}-${tokenList[1].symbol}`}
      </P>
    </Div>
  );
};

export default PoolTokenInfoDesktop;
