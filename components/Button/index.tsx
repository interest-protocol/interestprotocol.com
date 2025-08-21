import { FC, PropsWithChildren } from 'react';

import { ButtonProps } from './button.types';
import { Filled } from './filled';
import { Outline } from './outline';
import { Text } from './text';
import { Tonal } from './tonal';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant,
  ...props
}) => {
  return variant == 'filled' ? (
    <Filled {...props}> {children}</Filled>
  ) : variant == 'outline' ? (
    <Outline {...props}> {children}</Outline>
  ) : variant == 'text' ? (
    <Text {...props}> {children}</Text>
  ) : (
    <Tonal {...props}> {children}</Tonal>
  );
};
