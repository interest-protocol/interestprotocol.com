import { Div } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { useFarmAccount } from '@/hooks/use-farm-account';
import { FixedPointMath } from '@/lib';
import { formatMoney } from '@/utils';
import CollapseCardInfo from '@/views/components/collapse-card-info';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';

import FarmFormSection from './farm-form-section';
import Rewards from './rewards';

const Farm: FC = () => {
  const { pool } = usePoolDetailsContext();
  const { data } = useFarmAccount(pool.poolAddress);

  const stakedBalance = FixedPointMath.toNumber(BigNumber(data?.amount ?? 0));
  const rewards = FixedPointMath.toNumber(
    BigNumber(data?.rewards[0].amount ?? 0)
  );

  return (
    <Div
      gap={['1rem', '1rem', '1rem', '2rem']}
      display={['flex', 'flex', 'flex', 'grid']}
      flexDirection="column-reverse"
      gridTemplateColumns="2fr 1fr"
    >
      <Div display="flex" flexDirection="column" gap="1.5rem">
        <Rewards />
        <CollapseCardInfo
          title="Farm Information"
          data={[
            {
              info: { description: 'Staked Balance' },
              value: {
                description: formatMoney(stakedBalance),
              },
            },
            {
              info: { description: 'Rewards' },
              value: {
                description: `${formatMoney(rewards)} MOVE`,
              },
            },
          ]}
        />
      </Div>
      <FarmFormSection />
    </Div>
  );
};

export default Farm;
