import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';
import { formatDollars } from '@/utils/string';

import { RewardsProps } from './rewards.types';

const Rewards: FC<RewardsProps> = ({ tokens }) => (
  <Div mt="1.5rem" gap="0.5rem">
    <Div mb="1rem" display="flex" alignItems="center">
      <P
        color="#9CA3AF"
        fontWeight="400"
        fontFamily="Inter"
        fontSize="0.875rem"
      >
        Rewards per day
      </P>
      <Div
        flex="1"
        mx="0.5rem"
        height="1px"
        borderBottom="1px dashed #4B556380"
      />
    </Div>

    <Div display="flex" flexDirection="column" gap="0.5rem">
      {tokens.map((token) => (
        <Div
          key={unikey()}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <TokenIcon
            withBg
            rounded
            size="9.64px"
            symbol={token.symbol}
            network={Network.MovementMainnet}
          />
          <Span
            ml="0.5rem"
            color="#FFFFFF"
            fontWeight="400"
            fontFamily="Inter"
            fontSize="0.875rem"
          >
            {token.symbol}
          </Span>

          <Div
            flex="1"
            mx="0.5rem"
            height="1px"
            borderBottom="1px dashed #4B556380"
          />

          <P
            color="#FFFFFF"
            fontWeight="400"
            fontFamily="Inter"
            fontSize="0.875rem"
          >
            {token.amount.toLocaleString()}{' '}
            <Span color="#9CA3AF">
              ({formatDollars(token.value, 6, 'start')})
            </Span>
          </P>
        </Div>
      ))}
    </Div>
  </Div>
);

export default Rewards;
