import { FC } from 'react';

import { SVGProps } from './svg.types';

const More: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" d="M21.625 10.9V4.1C21.625 2.6 20.985 2 19.395 2H15.355C13.765 2 13.125 2.6 13.125 4.1V10.9C13.125 12.4 13.765 13 15.355 13H19.395C20.985 13 21.625 12.4 21.625 10.9Z" fill="white" />
    <path xmlns="http://www.w3.org/2000/svg" d="M11.125 13.1V19.9C11.125 21.4 10.485 22 8.895 22H4.855C3.265 22 2.625 21.4 2.625 19.9V13.1C2.625 11.6 3.265 11 4.855 11H8.895C10.485 11 11.125 11.6 11.125 13.1Z" fill="white" />
    <path xmlns="http://www.w3.org/2000/svg" opacity="0.4" d="M21.625 19.9V17.1C21.625 15.6 20.985 15 19.395 15H15.355C13.765 15 13.125 15.6 13.125 17.1V19.9C13.125 21.4 13.765 22 15.355 22H19.395C20.985 22 21.625 21.4 21.625 19.9Z" fill="white" />
    <path xmlns="http://www.w3.org/2000/svg" opacity="0.4" d="M11.125 6.9V4.1C11.125 2.6 10.485 2 8.895 2H4.855C3.265 2 2.625 2.6 2.625 4.1V6.9C2.625 8.4 3.265 9 4.855 9H8.895C10.485 9 11.125 8.4 11.125 6.9Z" fill="white" />
  </svg>
);

export default More;
