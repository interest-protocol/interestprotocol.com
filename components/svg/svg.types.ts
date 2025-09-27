import { SVGAttributes } from 'react';

export type IsSelected = boolean;

type SVGSize =
  | {
      maxWidth: string;
      maxHeight?: string;
    }
  | {
      maxWidth?: string;
      maxHeight: string;
    };

export type SVGProps = SVGAttributes<SVGSVGElement> &
  SVGSize & {
    isSelected?: IsSelected;
  };
