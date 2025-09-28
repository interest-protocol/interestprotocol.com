import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import Chart from './components/chart';
import Metric from './components/metric';
import Rewards from './components/rewards';
import { TooltipProps } from './tooltip.types';

export const Tooltip: FC<TooltipProps> = ({
  totalApr,
  fees,
  rewards,
  rewardsPerDay,
}) => {
  const chartData = [
    { name: 'Fees', value: fees },
    { name: 'Rewards', value: rewards },
  ];

  return (
    <Div
      p="1rem"
      gap="1rem"
      width="100%"
      bg="#121722"
      height="auto"
      display="flex"
      borderRadius="1rem"
      flexDirection="column"
      border="1px solid #9CA3AF"
      maxWidth={['100%', '22.625rem']}
    >
      <Div display="flex" alignItems="center" justifyContent="space-between">
        <P
          fontSize="1rem"
          color="#FFFFFF"
          fontWeight="500"
          fontFamily="Inter"
          lineHeight="1.75rem"
        >
          Total APR
        </P>
        <P
          fontSize="1rem"
          color="#B4C5FF"
          fontWeight="500"
          fontFamily="Inter"
          lineHeight="1.75rem"
        >
          {totalApr.toFixed(2)}%
        </P>
      </Div>

      <Div
        gap="1rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Chart data={chartData} colors={['#22C55E', '#FF9315']} />
        <Metric label="Fees" value={fees} color="#22C55E" suffix="%" />
        <Metric label="Rewards" value={rewards} color="#FF9315" />
      </Div>

      <Rewards tokens={rewardsPerDay} />
    </Div>
  );
};

export default Tooltip;
