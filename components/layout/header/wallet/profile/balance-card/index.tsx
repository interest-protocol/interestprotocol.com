import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { MOVE } from '@/constants/coins';
import { FixedPointMath } from '@/lib';
import { ZERO_BIG_NUMBER } from '@/utils';

const BalanceCard: FC = () => {
  const balance = ZERO_BIG_NUMBER;
  return (
    <Div
      gap="0.5rem"
      width="100%"
      display="flex"
      flexDirection="column"
      mr="1.5rem"
    >
      <P
        fontFamily="Inter"
        fontSize="1rem"
        fontWeight="500"
        lineHeight="1.3rem"
        color="#949E9E"
        textAlign="center"
      >
        {FixedPointMath.toNumber(balance, MOVE.decimals)}{' '}
        <Span>{MOVE.symbol}</Span>
      </P>
    </Div>
  );
};

export default BalanceCard;
