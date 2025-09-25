import { Div } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { ProgressBar } from './progress-bar';
import { ProgressCircle } from './progress-circle';
import { ProgressIndicatorProps } from './progress-indicator.types';

export const ProgressIndicator: FC<
  PropsWithChildren<ProgressIndicatorProps>
> = ({ size, value, status, variant, isRounded, ...props }) => {
  if (variant === 'bar')
    return (
      <ProgressBar
        isRounded={isRounded}
        value={value ?? 0}
        status={status}
        size={size}
        {...props}
      />
    );

  return (
    <Div role="progressbar" aria-label="circle" display="flex">
      <ProgressCircle
        size={size}
        status={status}
        value={variant === 'loading' ? -1 : (value ?? 0)}
        {...props}
      />
    </Div>
  );
};

export * from './progress-indicator.types';
