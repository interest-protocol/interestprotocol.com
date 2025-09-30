import { Button, P } from '@stylin.js/elements';
import { FC } from 'react';

import { MaxBadgeProps } from '../input.types';

export const MaxBadge: FC<MaxBadgeProps> = ({ handleMax }) => (
  <Button
    p="2px 6px"
    bg="#9CA3AF1A"
    cursor="pointer"
    onClick={handleMax}
    transition="all 300ms ease-in-out"
    borderRadius="0.75rem"
    border="2px solid #9CA3AF1A"
    nHover={{ bg: 'unset', borderColor: '#B4C5FF' }}
  >
    <P
      color="#9CA3AF"
      fontWeight="500"
      fontSize="0.75rem"
      whiteSpace="nowrap"
      fontFamily="Inter"
      lineHeight="1rem"
    >
      Max
    </P>
  </Button>
);
