import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowRight: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.22 5.22C8.36062 5.07955 8.55125 5.00066 8.75 5.00066C8.94875 5.00066 9.13937 5.07955 9.28 5.22L13.53 9.47C13.6704 9.61062 13.7493 9.80125 13.7493 10C13.7493 10.1987 13.6704 10.3894 13.53 10.53L9.28 14.78C9.13782 14.9125 8.94978 14.9846 8.75547 14.9812C8.56117 14.9777 8.37579 14.899 8.23837 14.7616C8.10096 14.6242 8.02225 14.4388 8.01882 14.2445C8.01539 14.0502 8.08752 13.8622 8.22 13.72L11.94 10L8.22 6.28C8.07955 6.13937 8.00066 5.94875 8.00066 5.75C8.00066 5.55125 8.07955 5.36062 8.22 5.22Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowRight;
