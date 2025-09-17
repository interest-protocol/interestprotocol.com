import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import DotsChart from '@/components/svg/dots-chart';

import { RangeHandleProps } from './range-handle.types';

const RangeHandle: FC<RangeHandleProps> = ({
  price,
  type,
  calcPosition,
  onMouseDown,
}) => (
  <Div
    top="0"
    bottom="0"
    height="82.5%"
    position="absolute"
    cursor="ew-resize"
    borderLeft="3px solid #2A5ADA"
    onMouseDown={() => onMouseDown(type)}
    style={{ left: `${calcPosition(price)}%` }}
  >
    <Div
      bg="#2A5ADA"
      width="1.25rem"
      display="flex"
      cursor="grab"
      height="1.75rem"
      alignItems="center"
      borderRadius="0.2rem"
      justifyContent="center"
      transform={type == 'min' ? 'translate(-100%, 0)' : 'translate(-10%, 0)'}
    >
      <DotsChart
        width="100%"
        maxWidth="0.75rem"
        maxHeight="0.75rem"
        color="#FFFFFF"
      />
    </Div>
  </Div>
);

export default RangeHandle;
