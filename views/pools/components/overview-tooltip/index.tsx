import { Div } from '@stylin.js/elements';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import Tooltip from '../tooltip';

const OverviewTooltip = () => {
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
          <Div
            zIndex={2}
            position="fixed"
            top={`${coords.y - 15}px`}
            left={`${coords.x}px`}
            transform="translateX(-50%)"
          >
            <Tooltip
              totalApr={157.49}
              fees={110.13}
              rewards={47.36}
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
          </Div>,
          document.body
        )}
    </Div>
  );
};

export default OverviewTooltip;
