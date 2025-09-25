import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowUp: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 12 16"
    fill="none"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M6.52964 4.47031C6.23667 4.17734 5.76089 4.17734 5.46792 4.47031L0.967919 8.97031C0.674951 9.26328 0.674951 9.73906 0.967919 10.032C1.26089 10.325 1.73667 10.325 2.02964 10.032L5.99995 6.06172L9.97026 10.0297C10.2632 10.3227 10.739 10.3227 11.032 10.0297C11.325 9.73672 11.325 9.26093 11.032 8.96797L6.53198 4.46797L6.52964 4.47031Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowUp;
