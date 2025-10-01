import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { TooltipWrapper } from '@/components/tooltip';
import Tooltip from '@/views/components/tooltip';

import { OverviewTooltipProps } from './overview-tooltip.types';

const OverviewTooltip: FC<OverviewTooltipProps> = ({
  apr,
  title,
  feesApr,
  rewardsApr,
}) => {
  return (
    <Div
      width="100%"
      display="flex"
      cursor="pointer"
      alignItems="center"
      justifyContent="flex-end"
      position={['relative', 'relative', 'relative', 'unset']}
    >
      <TooltipWrapper
        position="absolute"
        tooltipContent={
          <Tooltip
            totalApr={apr}
            fees={feesApr}
            rewards={rewardsApr}
            rewardsPerDay={[
              {
                symbol: 'USDC',
                balance: 4916.4,
                valueUSD: 14863.59,
              },
              {
                symbol: 'USDT',
                balance: 6.4,
                valueUSD: 63.59,
              },
            ]}
          />
        }
      >
        <Div color="#B4C5FF">{title}</Div>
      </TooltipWrapper>
    </Div>
  );
};

export default OverviewTooltip;
