import { FC, PropsWithChildren } from 'react';

import { ButtonProps, ButtonVariants } from './button.types';
import { Filled } from './filled';
import { Outline } from './outline';
import { Text } from './text';
import { Tonal } from './tonal';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant,
  ...props
}) => {
  const variants: Record<ButtonVariants, FC> = {
    filled: Filled,
    outline: Outline,
    text: Text,
    tonal: Tonal,
  };

  const Component = variants[variant] ?? Tonal;

  return <Component {...props}>{children}</Component>;
};
