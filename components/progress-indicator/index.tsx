import { FC } from 'react';
import { Div } from '@stylin.js/elements';

import { ProgressIndicatorProps } from './progress-indicator.types';

const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  size = '1.5rem',
  variant = 'loading',
  rounded = true,
  withBorder = false,
  withBg = false,
}) => {
  const colors = {
    loading: '#4f46e5',
    success: '#16a34a',
    error: '#dc2626',
  };

  return (
    <Div
      display="flex"
      position="relative"
      alignItems="center"
      justifyContent="center"
      width={`calc(${size} * 1.66)`}
      height={`calc(${size} * 1.66)`}
      borderRadius={rounded ? 'full' : 'xs'}
      border={withBorder ? '1px solid #FFFFFF' : undefined}
      {...(withBg && { bg: 'onSurface', color: 'surface' })}
    >
      <Div
        width={size}
        height={size}
        borderRadius="full"
        border={`2px solid #e5e7eb`}
        borderTop={`2px solid ${colors[variant]}`}
        animation="spin 1s linear infinite"
      />
    </Div>
  );
};

export default ProgressIndicator;
