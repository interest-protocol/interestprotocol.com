import { FC } from 'react';

import { LiquidityGradientProps } from './liquidity-gradient.types';

const LiquidityGradient: FC<LiquidityGradientProps> = ({
  minPercent,
  maxPercent,
}) => (
  <defs>
    <linearGradient id="liquidityFill" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#9CA3AF1A" />
      <stop offset={`${minPercent}%`} stopColor="#9CA3AF1A" />
      <stop offset={`${minPercent}%`} stopColor="#3A3A48" />
      <stop offset={`${maxPercent}%`} stopColor="#3A3A48" />
      <stop offset={`${maxPercent}%`} stopColor="#9CA3AF1A" />
      <stop offset="100%" stopColor="#9CA3AF1A" />
    </linearGradient>
  </defs>
);

export default LiquidityGradient;
