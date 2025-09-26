import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrangeSquare: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M9.875 22H15.875C20.875 22 22.875 20 22.875 15V9C22.875 4 20.875 2 15.875 2H9.875C4.875 2 2.875 4 2.875 9V15C2.875 20 4.875 22 9.875 22Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g xmlns="http://www.w3.org/2000/svg" opacity="0.4">
      <path
        d="M18.0249 13.8193L14.9849 16.8593"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.7251 13.8193H18.0251"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.7251 10.1796L10.7651 7.13965"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0251 10.1797H7.7251"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default ArrangeSquare;
