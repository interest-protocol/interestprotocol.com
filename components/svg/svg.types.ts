import { SVGAttributes } from 'react';

type SVGSize =
  | {
      maxWidth: string;
      maxHeight?: string;
    }
  | {
      maxWidth?: string;
      maxHeight: string;
    };

export type SVGProps = SVGAttributes<SVGSVGElement> & SVGSize;
