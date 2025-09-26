import { FC } from 'react';

import { SVGProps } from './svg.types';

const CirclePlus: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C3.1392 0 0 3.1392 0 12C0 20.8608 3.1392 24 12 24C20.8596 24 24 20.8608 24 12C24 3.1392 20.8596 0 12 0Z"
      fill="#B4C5FF"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12.8788 12.8785H16.1938C16.6791 12.8785 17.073 12.4846 17.073 11.9993C17.073 11.514 16.6791 11.1202 16.1938 11.1202H12.8788V7.80983C12.8788 7.32453 12.4849 6.93066 11.9996 6.93066C11.5143 6.93066 11.1205 7.32453 11.1205 7.80983V11.1202H7.80543C7.32013 11.1202 6.92627 11.514 6.92627 11.9993C6.92627 12.4846 7.32013 12.8785 7.80543 12.8785H11.1205V16.1888C11.1205 16.6741 11.5143 17.068 11.9996 17.068C12.4849 17.068 12.8788 16.6741 12.8788 16.1888V12.8785Z"
      fill="#B4C5FF"
    />
  </svg>
);

export default CirclePlus;
