import { FC } from 'react';

import { SVGProps } from './svg.types';

const Pool: FC<SVGProps> = ({ isSelected, maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    {isSelected ? (
      <>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M22.625 8.5C22.625 12.09 19.715 15 16.125 15C15.955 15 15.775 14.99 15.605 14.98C15.355 11.81 12.815 9.27 9.64499 9.02C9.63499 8.85 9.625 8.67 9.625 8.5C9.625 4.91 12.535 2 16.125 2C19.715 2 22.625 4.91 22.625 8.5Z"
          fill="#B4C5FF"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          opacity="0.4"
          d="M15.625 15.5C15.625 19.09 12.715 22 9.125 22C5.535 22 2.625 19.09 2.625 15.5C2.625 11.91 5.535 9 9.125 9C9.295 9 9.47499 9.01 9.64499 9.02C12.815 9.27 15.355 11.81 15.605 14.98C15.615 15.15 15.625 15.33 15.625 15.5Z"
          fill="#B4C5FF"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M8.245 14.62L9.125 13L10.005 14.62L11.625 15.5L10.005 16.38L9.125 18L8.245 16.38L6.625 15.5L8.245 14.62Z"
          fill="#B4C5FF"
        />
      </>
    ) : (
      <>
        <path
          xmlns="http://www.w3.org/2000/svg"
          opacity="0.4"
          d="M22.625 8.5C22.625 12.09 19.715 15 16.125 15C15.955 15 15.775 14.99 15.605 14.98C15.355 11.81 12.815 9.26999 9.64499 9.01999C9.63499 8.84999 9.625 8.67 9.625 8.5C9.625 4.91 12.535 2 16.125 2C19.715 2 22.625 4.91 22.625 8.5Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M15.625 15.5C15.625 19.09 12.715 22 9.125 22C5.535 22 2.625 19.09 2.625 15.5C2.625 11.91 5.535 9 9.125 9C9.295 9 9.47499 9.00999 9.64499 9.01999C12.815 9.26999 15.355 11.81 15.605 14.98C15.615 15.15 15.625 15.33 15.625 15.5Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          opacity="0.4"
          d="M8.245 14.62L9.125 13L10.005 14.62L11.625 15.5L10.005 16.38L9.125 18L8.245 16.38L6.625 15.5L8.245 14.62Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )}
  </svg>
);

export default Pool;
