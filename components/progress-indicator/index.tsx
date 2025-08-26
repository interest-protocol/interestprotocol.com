import { Div } from '@stylin.js/elements';
import { FC } from 'react';

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
      borderRadius={rounded ? '9999rem' : '0.5rem'}
      border={withBorder ? '1px solid #FFFFFF' : undefined}
      {...(withBg && { bg: 'onSurface', color: 'surface' })}
    >
      <Div
        width={size}
        height={size}
        borderRadius="9999rem"
        border={`2px solid #e5e7eb`}
        animation="spin 1s linear infinite"
        borderTop={`2px solid ${colors[variant]}`}
      />
    </Div>
  );
};

export default ProgressIndicator;
