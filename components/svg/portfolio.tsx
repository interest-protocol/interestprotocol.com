import { FC } from 'react';

import { SVGProps } from './svg.types';

const Portfolio: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M19.005 7.15014C19.045 7.76014 18.995 8.45014 18.875 9.22014L18.145 13.9101C17.525 17.8201 15.715 19.1401 11.805 18.5301L7.11499 17.7901C5.76499 17.5801 4.72499 17.2201 3.96499 16.6801C2.51499 15.6701 2.09499 14.0101 2.49499 11.4501L3.23499 6.76014C3.85499 2.85014 5.66499 1.53014 9.57499 2.14014L14.265 2.88014C17.405 3.37014 18.875 4.65014 19.005 7.15014Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      opacity="0.4"
      d="M20.8748 13.4704L19.3748 17.9804C18.1248 21.7404 16.1248 22.7404 12.3648 21.4904L7.85484 19.9904C5.58484 19.2404 4.32484 18.2004 3.96484 16.6804C4.72484 17.2204 5.76484 17.5804 7.11484 17.7904L11.8048 18.5304C15.7148 19.1404 17.5248 17.8204 18.1448 13.9104L18.8748 9.22039C18.9948 8.45039 19.0448 7.76039 19.0048 7.15039C21.3948 8.42039 21.9148 10.3404 20.8748 13.4704Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      opacity="0.4"
      d="M8.615 8.98C9.57598 8.98 10.355 8.20098 10.355 7.24C10.355 6.27902 9.57598 5.5 8.615 5.5C7.65402 5.5 6.875 6.27902 6.875 7.24C6.875 8.20098 7.65402 8.98 8.615 8.98Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Portfolio;
