import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TOKENS } from '@/constants/coins';
import { parseToMetadata } from '@/utils';

import CoinCard from './coin-card';

const VerifiedCoinList: FC = () => {
  const verifiedTokens = TOKENS.map(parseToMetadata);

  return (
    <Div display="flex" flexDirection="column" gap="0.5rem">
      <P
        color="#fff"
        fontWeight="500"
        fontFamily="Inter"
        fontSize="0.85rem"
        lineHeight="1.5rem"
        textTransform="uppercase"
      >
        COINS
      </P>
      {verifiedTokens.map((token) => (
        <CoinCard key={v4()} token={token} />
      ))}
    </Div>
  );
};
export default VerifiedCoinList;
