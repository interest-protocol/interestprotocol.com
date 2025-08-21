import { DivProps } from '@stylin.js/elements';
import { CustomDomComponent } from 'framer-motion';

export type MotionProps = Omit<
  DivProps,
  'transition' | 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'
>;

export type MotionComponent = CustomDomComponent<MotionProps>;
