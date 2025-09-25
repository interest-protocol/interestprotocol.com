import { FC } from 'react';

import { SVGProps } from './svg.types';

const Facebook: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 17 16"
    fill="none"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M15.1663 8.00065C15.1663 4.32065 12.1797 1.33398 8.49967 1.33398C4.81967 1.33398 1.83301 4.32065 1.83301 8.00065C1.83301 11.2273 4.12634 13.914 7.16634 14.534V10.0007H5.83301V8.00065H7.16634V6.33398C7.16634 5.04732 8.21301 4.00065 9.49967 4.00065H11.1663V6.00065H9.83301C9.46634 6.00065 9.16634 6.30065 9.16634 6.66732V8.00065H11.1663V10.0007H9.16634V14.634C12.533 14.3007 15.1663 11.4607 15.1663 8.00065Z"
      fill="currentColor"
    />
  </svg>
);

export default Facebook;
