import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import Tag from '@/components/tag';
import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';

import { PortfolioDetailsFormProps } from '../../portfolio-details.types';
import Breadcrumb from '../breadcrumb';

const PoolDetailsHeader: FC = () => {
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();

  const pairPosition = `${getValues('tokenList')[0].symbol}-${getValues('tokenList')[1].symbol}`;

  return (
    <Div gap="1rem" width="100%" display="flex" flexDirection="column">
      <Breadcrumb pairPosition={pairPosition} />

      <Div display="flex" alignItems="center" justifyContent="space-between">
        <Div gap="1rem" display="flex" alignItems="center" mb={['0', '1rem']}>
          <TokenIcon
            withBg
            size="1.52rem"
            url={getValues('lpCoin.iconUri')}
            network={Network.MovementMainnet}
            symbol={getValues('lpCoin.symbol')}
          />
          <P
            fontWeight="600"
            color="#E5E7EB"
            fontFamily="Inter"
            fontSize="1.75rem"
            lineHeight="2.8125rem"
          >
            {pairPosition}
          </P>
        </Div>
        <Tag type="success" label="In Range" />
      </Div>
    </Div>
  );
};
export default PoolDetailsHeader;
