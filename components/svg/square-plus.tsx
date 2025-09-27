import { FC } from 'react';

import { SVGProps } from './svg.types';

const SquarePlus: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00006 6.06592V11.9392"
        stroke="#002A78"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9397 9.00177H6.0603"
        stroke="#002A78"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 9C1 3.00043 3.00043 1 9 1C14.9996 1 17 3.00043 17 9C17 14.9996 14.9996 17 9 17C3.00043 17 1 14.9996 1 9Z"
        stroke="#002A78"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </svg>
);

export default SquarePlus;
