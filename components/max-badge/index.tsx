import { Button, P } from '@stylin.js/elements';
import { FC } from 'react';

import { MaxBadgeProps } from './max-badge.types';

export const MaxBadge: FC<MaxBadgeProps> = ({ handleMax }) => (
  <Button
    p="2px 6px"
    bg="#9CA3AF1A"
    cursor="pointer"
    color="#9CA3AF"
    onClick={handleMax}
    borderRadius="0.75rem"
    border="2px solid #9CA3AF1A"
    transition="all 150ms ease-in-out"
    nHover={{ bg: 'unset', color: '#B4C5FF' }}
  >
    <P
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
