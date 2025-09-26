import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrangeSquare: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 13 12"
    fill="none"
    {...props}
  >
    <g xmlns="http://www.w3.org/2000/svg" opacity="0.4">
      <path
        d="M12.0249 7.82031L8.98486 10.8603"
        stroke="#B4C5FF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.7251 7.82031H12.0251"
        stroke="#B4C5FF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.7251 4.18063L4.7651 1.14062"
        stroke="#B4C5FF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0251 4.17969H1.7251"
        stroke="#B4C5FF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default ArrangeSquare;
