import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { ProgressBarProps } from './progress-bar.types';

const ProgressBar: FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <Div
      width="100%"
      height="0.375rem"
      bg="#9CA3AF1A"
      borderTopLeftRadius="100000px"
      borderTopRightRadius="100000px"
      borderBottomRightRadius="0"
    >
      <Div
        bg="#B4C5FF"
        height="0.375rem"
        width={`${progress}%`}
        borderTopLeftRadius="100000px"
        borderTopRightRadius="100000px"
        borderBottomRightRadius="100000px"
        transition="width 0.3s ease"
        style={{
          background: 'linear-gradient(90deg, #8BA5FF 0%, #6366F1 100%)',
        }}
      />
    </Div>
  );
};

export default ProgressBar;
