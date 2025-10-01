import { DivProps } from '@stylin.js/elements';
import { ReactNode } from 'react';

export interface TooltipProps extends DivProps {
  tooltipContent: string | ReactNode;
}
