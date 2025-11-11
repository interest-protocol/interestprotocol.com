import { AccountAddress } from '@aptos-labs/ts-sdk';
import { Div } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import Tag from '@/components/tag';
import { Network } from '@/constants';
import { MOVE } from '@/constants/coins';
import { useCoinsPrice } from '@/hooks';
import { useFarmAccount } from '@/hooks/use-farm-account';
import { FixedPointMath } from '@/lib';
import { formatDollars, ZERO_BIG_NUMBER } from '@/utils';
import { CollapseCardInfoLineProps } from '@/views/components/collapse-card-info/collapse-card-info.types';
import PoolDetailsInformation from '@/views/components/pool-information-collapse';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';

import CollapseCardInfo from '../../../components/collapse-card-info';
import PoolBalance from './pool-balance';
import YourPositionBanner from './your-position-banner';

const Info: FC = () => {
  const { pool } = usePoolDetailsContext();
  const { data: farmAccount } = useFarmAccount(pool.poolAddress);
  const { data: coinsPrice } = useCoinsPrice([MOVE.address.toString()]);

  const movePrice = coinsPrice?.[0]?.price;

  const balance =
    farmAccount?.rewards.reduce(
      (acc, curr) =>
        MOVE.address.equals(AccountAddress.from(curr.fa))
          ? acc.plus(BigNumber(String(curr.amount)))
          : acc,
      ZERO_BIG_NUMBER
    ) ?? ZERO_BIG_NUMBER;

  const EARNINGS_FEES_DATA: ReadonlyArray<CollapseCardInfoLineProps> = [
    {
      info: {
        description: 'MOVE',
        Suffix: (
          <>
            <TokenIcon
              withBg
              symbol="MOVE"
              size="0.806rem"
              network={Network.MovementMainnet}
            />
            <Tag type="success" label="Rewards" small />
          </>
        ),
      },
      value: {
        description: formatDollars(
          movePrice
            ? +(movePrice * FixedPointMath.toNumber(balance)).toFixed(4)
            : 0,
          4,
          'start'
        ),
      },
    },
  ];

  return (
    <Div display="flex" flexDirection="column" gap="1.5rem">
      <YourPositionBanner />
      <PoolBalance />
      <Div display="flex" flexDirection="column" gap="1rem">
        <PoolDetailsInformation title="Pool Overview" />
        <CollapseCardInfo title="Earnings" data={EARNINGS_FEES_DATA} />
      </Div>
    </Div>
  );
};
export default Info;
