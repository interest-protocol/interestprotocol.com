import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { createPortal } from 'react-dom';

import { Motion } from '@/components/motion';
import Tooltip from '@/views/components/tooltip';

import { OverviewTooltipProps } from './overview-tooltip.types';

const OverviewTooltip: FC<OverviewTooltipProps> = ({
  apr,
  feesApr,
  rewardsApr,
}) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
    setOpen(true);
  };

  return (
    <Div
      cursor="pointer"
      color="#B4C5FF"
      display="inline-block"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setOpen(false)}
    >
      Overview
      {open &&
        coords &&
        createPortal(
          <Motion
            key="tooltip"
            position="fixed"
            left={`${coords.x}px`}
            top={`${coords.y - 350}px`}
            transform={`translateX(-50%)`}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
          >
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
          </Motion>,
          document.body
        )}
    </Div>
  );
};

export default OverviewTooltip;
