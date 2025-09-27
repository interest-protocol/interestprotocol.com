import { FC } from 'react';

import { SVGProps } from './svg.types';

const ChartSquare: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      opacity="0.4"
      d="M17.0245 0H6.97549C2.6053 0 0 2.6053 0 6.97549V17.0245C0 21.3947 2.6053 24 6.97549 24H17.0245C21.3947 24 24 21.3947 24 17.0245V6.97549C24 2.6053 21.3947 0 17.0245 0Z"
      fill="#B4C5FF"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M10.2267 11.0742H7.27134C6.56875 11.0742 6 11.6429 6 12.3455V18.0555H10.2267V11.0742Z"
      fill="#B4C5FF"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      opacity="0.4"
      d="M13.1818 6H11.4867C10.7841 6 10.2153 6.56878 10.2153 7.27137V18.0445H14.442V7.27137C14.442 6.56878 13.8844 6 13.1818 6Z"
      fill="#B4C5FF"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M17.4087 12.9697H14.4534V18.044H18.6801V14.2411C18.6689 13.5385 18.1001 12.9697 17.4087 12.9697Z"
      fill="#B4C5FF"
    />
  </svg>
);

export default ChartSquare;
