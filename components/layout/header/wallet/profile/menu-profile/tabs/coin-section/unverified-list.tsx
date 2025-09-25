import { AccountAddress } from '@aptos-labs/ts-sdk';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TOKENS } from '@/constants/coins';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { TokenStandard } from '@/lib/coins-manager/coins-manager.types';

import NoCoin from '../no-coin';
import CoinCard from './coin-card';
import Collapse from './coin-card/collapse';

const UnverifiedCoinList: FC = () => {
  const { coins } = useCoins();

  const unverifiedCoins = coins.filter(
    ({ type, standard }) =>
      standard === TokenStandard.FA &&
      !TOKENS.some((token) => token.address.equals(AccountAddress.from(type)))
  );

  return (
    <Collapse title={`${unverifiedCoins.length} unverified`}>
      {unverifiedCoins.length ? (
        unverifiedCoins.map((token) => <CoinCard key={v4()} token={token} />)
      ) : (
        <NoCoin />
      )}
    </Collapse>
  );
};

export default UnverifiedCoinList;
