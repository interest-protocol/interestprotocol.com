import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrangeSquare: FC<SVGProps> = ({
  isSelected,
  maxWidth,
  maxHeight,
  ...props
}) => (
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
          opacity="0.4"
          d="M17.065 2H8.685C5.045 2 2.875 4.17 2.875 7.81V16.18C2.875 19.83 5.045 22 8.685 22H17.055C20.695 22 22.865 19.83 22.865 16.19V7.81C22.875 4.17 20.705 2 17.065 2Z"
          fill="#B4C5FF"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M18.7249 13.5296C18.6449 13.3496 18.5049 13.1996 18.3149 13.1196C18.2249 13.0796 18.1249 13.0596 18.0249 13.0596H7.72485C7.31485 13.0596 6.97485 13.3996 6.97485 13.8096C6.97485 14.2196 7.31485 14.5596 7.72485 14.5596H16.2249L14.4649 16.3196C14.1749 16.6096 14.1749 17.0896 14.4649 17.3796C14.6149 17.5296 14.8049 17.5996 14.9949 17.5996C15.1849 17.5996 15.3749 17.5296 15.5249 17.3796L18.5649 14.3396C18.6349 14.2696 18.6849 14.1896 18.7249 14.0996C18.7949 13.9196 18.7949 13.7096 18.7249 13.5296Z"
          fill="#B4C5FF"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M7.02491 10.4698C7.10491 10.6498 7.24491 10.7998 7.43491 10.8798C7.52491 10.9198 7.62491 10.9398 7.72491 10.9398H18.0349C18.4449 10.9398 18.7849 10.5998 18.7849 10.1898C18.7849 9.77984 18.4449 9.43984 18.0349 9.43984H9.53491L11.2949 7.67984C11.5849 7.38984 11.5849 6.90984 11.2949 6.61984C11.0049 6.32984 10.5249 6.32984 10.2349 6.61984L7.19491 9.64984C7.12491 9.71984 7.06491 9.80984 7.02491 9.89984C6.95491 10.0798 6.95491 10.2898 7.02491 10.4698Z"
          fill="#B4C5FF"
        />
      </>
    ) : (
      <>
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
      </>
    )}
  </svg>
);

export default ArrangeSquare;
