import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { FA_TO_COIN, MOVE } from '@/constants/coins';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { ZERO_BIG_NUMBER } from '@/utils';

const MOVE_ADDRESS = MOVE.address.toString();
const MOVE_TYPE = normalizeSuiAddress(String(FA_TO_COIN[MOVE_ADDRESS]!));

const MoveBalanceCard: FC = () => {
  const { coinsMap } = useCoins();

  const typeBalance = coinsMap[MOVE_TYPE]?.balance;
  const addressBalance = coinsMap[normalizeSuiAddress(MOVE_ADDRESS)]?.balance;
  const balance = (typeBalance ?? ZERO_BIG_NUMBER).plus(
    addressBalance ?? ZERO_BIG_NUMBER
  );

  return (
    <Div gap="0.5rem" width="100%" display="flex" flexDirection="column">
      <P
        fontFamily="Inter"
        fontWeight="500"
        lineHeight="1.3rem"
        color="#949E9E"
        textAlign="center"
        fontSize={['0.875rem', '1rem']}
      >
        {FixedPointMath.toNumber(balance, MOVE.decimals)}{' '}
        <Span textAlign="center">{MOVE.symbol}</Span>
      </P>
    </Div>
  );
};

export default MoveBalanceCard;
