import { Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';

import { MotionComponent } from './motion.types';

export const Motion = motion(Div) as MotionComponent;
export * from './motion.types';
