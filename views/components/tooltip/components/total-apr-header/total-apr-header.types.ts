import { Div } from '@stylin.js/elements';
import { ComponentProps } from 'react';

type DivProps = ComponentProps<typeof Div>;

export interface TotalAprHeaderProps extends DivProps {
  totalApr: number;
}
