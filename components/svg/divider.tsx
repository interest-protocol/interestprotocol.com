import { FC } from 'react';

import { SVGProps } from './svg.types';

const Divider: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 49 5"
    fill="none"
    {...props}
  >
    <rect
      xmlns="http://www.w3.org/2000/svg"
      x="0.5"
      width="48"
      height="5"
      rx="2.5"
      fill="#393838"
    />
  </svg>
);

export default Divider;
