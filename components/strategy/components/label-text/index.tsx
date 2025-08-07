import { Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LabelTextProps } from './label-text.types';

const LabelText: FC<LabelTextProps> = ({ children, color = '#9CA3AF', ml }) => (
  <Typography
    size="large"
    color={color}
    variant="label"
    fontWeight="400"
    fontFamily="Inter"
    fontSize="0.875rem"
    marginLeft={ml}
  >
    {children}
  </Typography>
);

export default LabelText;
