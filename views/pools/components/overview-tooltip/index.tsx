import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useEffect, useState } from 'react';

import { TooltipWrapper } from '@/components/tooltip';
import { useModal } from '@/hooks/use-modal';
import Tooltip from '@/views/components/tooltip';

import { OverviewTooltipProps } from './overview-tooltip.types';

const OverviewTooltip: FC<OverviewTooltipProps> = ({
  apr,
  title,
  feesApr,
  rewardsApr,
}) => {
  const { setContent } = useModal();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 992);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const tooltipContent = (
    <Tooltip
      totalApr={apr}
      fees={feesApr}
      rewards={rewardsApr}
      rewardsPerDay={[
        { symbol: 'USDC', balance: 4916.4, valueUSD: 14863.59 },
        { symbol: 'USDT', balance: 6.4, valueUSD: 63.59 },
      ]}
    />
  );

  const openModal = () =>
    setContent(tooltipContent, {
      title: 'APR Details',
      modalWidth: '24rem',
      mobileOnly: true,
      showTitleOnMobile: false,
    });

  return (
    <Div
      width="100%"
      display="flex"
      cursor="pointer"
      alignItems="center"
      justifyContent="flex-end"
      position={['relative', 'relative', 'relative', 'unset']}
    >
      {isMobile ? (
        <Div color="#B4C5FF" onClick={openModal}>
          {title}
        </Div>
      ) : (
        <TooltipWrapper position="absolute" tooltipContent={tooltipContent}>
          <Div color="#B4C5FF">{title}</Div>
        </TooltipWrapper>
      )}
    </Div>
  );
};

export default OverviewTooltip;
