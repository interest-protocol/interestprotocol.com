import { Button, P } from '@stylin.js/elements';
import { FC } from 'react';

import { MaxBadgeProps } from './input.types';

export const MaxBadge: FC<MaxBadgeProps> = ({ handleMax }) => (
  <Button
    bg="#9CA3AF1A"
    p="2px 6px"
    borderRadius="0.75rem"
    border="2px solid #9CA3AF1A"
    color="outline"
    onClick={handleMax}
    nHover={{ bg: 'unset', borderColor: 'primary' }}
  >
    <P
      fontSize="0.75rem"
      whiteSpace="nowrap"
      fontWeight="500"
      fontFamily="Inter"
      lineHeight="1rem"
    >
      Max
    </P>
  </Button>
);
