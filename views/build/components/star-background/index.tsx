import { FC, useState } from 'react';
import { v4 } from 'uuid';

import Motion from '@/components/motion';

import Particle from './particle';
import { StarBackgroundProps } from './star-background.types';

const HeroBackground: FC<StarBackgroundProps> = ({
  numberOfParticles = 50,
}) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 3;
    const y = (e.clientY / innerHeight - 0.5) * 3;
    setMouse({ x, y });
  };

  return (
    <Motion
      zIndex={0}
      position="absolute"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      overflow="hidden"
      onMouseMove={handleMouseMove}
    >
      <Motion
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        animate={{
          x: mouse.x,
          y: mouse.y,
          rotate: mouse.x * 0.02,
          scale: 1.01,
        }}
        pointerEvents="none"
        transition={{ type: 'spring', stiffness: 10, damping: 40 }}
        backgroundImage={`
          linear-gradient(to right, rgba(217,217,217,0.025) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(217,217,217,0.025) 1px, transparent 1px)
        `}
        backgroundSize="3.75rem 3.75rem"
      />

      <Motion
        zIndex="0"
        top="0"
        left="0"
        width="100%"
        position="absolute"
        height="100%"
        background={`radial-gradient(
          circle at 50% 40%,         
          rgba(0, 83, 219, 0.25) 0%, 
          rgba(0, 83, 219, 0.12) 25%,
          rgba(0, 83, 219, 0.05) 40%,
          rgba(0, 83, 219, 0) 55%
        )`}
        pointerEvents="none"
      />

      {Array.from({ length: numberOfParticles }, () => (
        <Particle key={v4()} />
      ))}
    </Motion>
  );
};

export default HeroBackground;
