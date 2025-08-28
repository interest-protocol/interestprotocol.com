import { Button, Div, P } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Motion } from '@/components/motion';
import { ComputerEyesSVG, DiedComputerSVG } from '@/components/svg';

import { ErrorProps } from './error.types';

const Error: FC<ErrorProps> = ({ message, linkGoTo }) => {
  const { push } = useRouter();

  return (
    <Div
      bg="surface"
      display="flex"
      color="#E2E2E6"
      minHeight="100vh"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Div width="100%" maxWidth="60rem" position="relative" mx="auto">
        <Motion
          top="22%"
          width="6%"
          left="40.2%"
          position="absolute"
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 2.5,
            repeatType: 'mirror',
          }}
          animate={{ scaleY: [1, 0, 1] }}
        >
          <ComputerEyesSVG maxHeight="100%" maxWidth="100%" />
        </Motion>
        <DiedComputerSVG maxHeight="100%" maxWidth="100%" width="100%" />
      </Div>
      <P mb=".5rem" textAlign="center">
        OOPS!
      </P>
      <P mb="1rem" mx="auto" maxWidth="30rem" textAlign="center">
        {message || 'Something went wrong'}
      </P>
      <Button
        mx="auto"
        bg="#E2E2E6"
        color="inverseOnSurface"
        onClick={() => push(linkGoTo || '/')}
      >
        Back home!
      </Button>
    </Div>
  );
};

export default Error;
