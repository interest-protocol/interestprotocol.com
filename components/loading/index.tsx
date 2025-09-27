import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { Motion } from '../motion';

const Loading: FC = () => {
  const boxColor = ['#FBF8FD', '#B4C5FF'];

  return (
    <Div position="relative">
      <Motion
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '0.5rem', '1rem', '0rem'],
          y: ['0rem', '0.5rem', '1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '0.5rem', '1rem', '0rem'],
          y: ['0rem', '-0.5rem', '0rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '0.5rem', '1rem', '0rem'],
          y: ['0rem', '-0.5rem', '-1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '0rem', '0rem'],
          y: ['0rem', '0.5rem', '1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '0rem', '0rem'],
          y: ['0rem', '-0.5rem', '0rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '0rem', '0rem'],
          y: ['0rem', '-0.5rem', '-1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '-1rem', '0rem'],
          y: ['0rem', '-0.5rem', '0rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '-1rem', '0rem'],
          y: ['0rem', '-0.5rem', '-1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '-1rem', '0rem'],
          y: ['0rem', '0.5rem', '1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
    </Div>
  );
};

export default Loading;
