import { FC } from 'react';

import { SVGProps } from './svg.types';

const DotError: FC<SVGProps & { dotColor?: string }> = ({
  maxHeight,
  maxWidth,
  dotColor,
  ...props
}) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 12 12"
      stroke="currentColor"
      style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
      />
    </svg>
  );
};

export default DotError;
