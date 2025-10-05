import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Chart from './components/chart';
import Metric from './components/metric';
import TotalAprHeader from './components/total-apr-header';
import { TooltipProps } from './tooltip.types';

const Tooltip: FC<TooltipProps> = ({ fees, rewards, totalApr }) => {
  const chartData = [
    { name: 'Fees', value: fees },
    { name: 'Rewards', value: rewards },
  ];

  const feesPercentage = totalApr > 0 ? (fees / totalApr) * 100 : 0;
  const rewardsPercentage = totalApr > 0 ? (rewards / totalApr) * 100 : 0;

  return (
    <>
      <TotalAprHeader
        totalApr={totalApr}
        mb="1rem"
        display={['flex', 'flex', 'flex', 'none']}
      />

      <Div
        p="1rem"
        gap="1rem"
        width="100%"
        bg={['#9CA3AF1A', '#9CA3AF1A', '#9CA3AF1A', '#121722']}
        height="auto"
        display="flex"
        borderRadius="1rem"
        flexDirection="column"
        maxWidth={['100%', '100%', '100%', '22.625rem']}
        border={['none', 'none', 'none', '1px solid #9CA3AF']}
      >
        <TotalAprHeader
          totalApr={totalApr}
          display={['none', 'none', 'none', 'flex']}
        />

        <Div
          gap="1rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Chart data={chartData} colors={['#22C55E', '#FF9315']} />
          <Metric
            label="Fees"
            value={feesPercentage}
            color="#22C55E"
            suffix="%"
          />
          <Metric
            label="Rewards"
            value={rewardsPercentage}
            color="#FF9315"
            suffix="%"
          />
        </Div>
        {/* <Rewards tokens={rewardsPerDay} /> */}
      </Div>
    </>
  );
};

export default Tooltip;
