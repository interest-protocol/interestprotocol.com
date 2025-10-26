import { Div } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { useFarms } from '@/hooks/use-farms';
import { FixedPointMath } from '@/lib';
import { formatMoney } from '@/utils';
import CollapseCardInfo from '@/views/components/collapse-card-info';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';

import FarmFormSection from './farm-form-section';
import Rewards from './rewards';

const Farm: FC = () => {
  const { pool } = usePoolDetailsContext();

  const { data: farm, isLoading } = useFarms([pool?.poolAddress ?? '']);
  const data = farm?.[0];

  const stakedBalance = isLoading
    ? 0
    : FixedPointMath.toNumber(BigNumber(data?.stakedBalance ?? 0), 9);

  const rewards = isLoading
    ? 0
    : FixedPointMath.toNumber(
        BigNumber(data?.rewards[0].rewardsPerSecond ?? 0)
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
                description: formatMoney(stakedBalance, 4),
              },
            },
            {
              info: { description: 'Rewards' },
              value: {
                description: `${formatMoney(rewards * 86400)} MOVE per day`,
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
