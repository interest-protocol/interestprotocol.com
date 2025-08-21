import { FC, PropsWithChildren, useId } from 'react';

import { Motion } from '../motion';
import CirclePath from './circle-path';
import { ProgressItemProps } from './progress-indicator.types';
import { getProgressColor } from './progress-indicator.utils';

export const ProgressCircle: FC<PropsWithChildren<ProgressItemProps>> = ({
  value,
  status,
  size = 50,
  noAnimation,
}) => {
  const id = useId();
  const clipPathId = `clipPath-${id}`;

  return (
    <>
      <CirclePath size={size} id={clipPathId} />
      <Motion
        width={size}
        height={size}
        clipPath={`url(#${clipPathId})`}
        transition={{
          ease: 'linear',
          ...(value < 0
            ? { duration: 1.5, repeat: Infinity }
            : { duration: 0.5 }),
        }}
        {...(value < 0
          ? {
              animate: {
                backgroundImage: [
                  `conic-gradient(#1F1F23 0%, ${getProgressColor(
                    status
                  )} 0%, ${getProgressColor(status)} 0%, #1F1F23 0%)`,
                  `conic-gradient(#1F1F23 0%, ${getProgressColor(
                    status
                  )} 0%,  ${getProgressColor(status)} 100%, #1F1F23 100%)`,
                  `conic-gradient(#1F1F23 100%, ${getProgressColor(
                    status
                  )} 100%, ${getProgressColor(status)} 100%, #1F1F23 100%)`,
                ],
              },
            }
          : {
              initial: {
                backgroundImage: noAnimation
                  ? `conic-gradient(${getProgressColor(
                      status
                    )} ${value}%, ${'#1F1F23'} ${value}%)`
                  : `conic-gradient(${getProgressColor(
                      status
                    )} 0%, '#1F1F23' 0%)`,
              },
              animate: {
                backgroundImage: `conic-gradient(${getProgressColor(
                  status
                )} ${value}%, '#1F1F23', ${value}%)`,
              },
            })}
      />
    </>
  );
};
