import { P } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/Button';

import { MaxBadgeProps } from './input.types';

export const MaxBadge: FC<MaxBadgeProps> = ({ handleMax }) => (
  <Button
    variant="outline"
    p="2px 6px"
    bg="#9CA3AF1A"
    color="#909094"
    onClick={handleMax}
    borderRadius="0.75rem"
    border="2px solid #909094"
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
