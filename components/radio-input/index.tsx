import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { RadioButtonProps } from './radio-input.types';

export const RadioButton: FC<RadioButtonProps> = ({
  selected,
  onClick,
  size = '1.25rem',
  innerSize = '0.625rem',
  color = '#B4C5FF',
}) => (
  <Div
    width={size}
    height={size}
    cursor="pointer"
    display="flex"
    borderRadius="50%"
    alignItems="center"
    justifyContent="center"
    border={`2px solid ${color}`}
    bg={selected ? color : 'transparent'}
    onClick={onClick}
    transition="all 0.15s ease-in-out"
  >
    {selected && (
      <Div
        width={innerSize}
        height={innerSize}
        bg="#FFFFFF"
        borderRadius="50%"
      />
    )}
  </Div>
);
