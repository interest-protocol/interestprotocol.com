import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';

import { usePoolDetailsContext } from '../pool-details.context';

const PoolBalance: FC = () => {
  const { pool } = usePoolDetailsContext();

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
        {pool?.tokensMetadata?.map((token) => (
          <Div display="flex" gap="0.5rem" key={v4()}>
            <TokenIcon
              withBg
              size="1rem"
              url={token.iconUri}
              symbol={token.symbol}
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
        ))}
      </Div>
    </Div>
  );
};

export default PoolBalance;
