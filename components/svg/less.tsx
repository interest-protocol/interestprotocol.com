import { FC } from 'react';

import { SVGProps } from './svg.types';

const Less: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M11.4833 7.56494C11.4833 8.03164 11.1063 8.40869 10.6397 8.40869H1.36042C0.893817 8.40869 0.516846 8.03164 0.516846 7.56494C0.516846 7.09824 0.893817 6.72119 1.36042 6.72119H10.6397C11.1063 6.72119 11.4833 7.09824 11.4833 7.56494Z"
      fill="currentColor"
    />
  </svg>
);

export default Less;
