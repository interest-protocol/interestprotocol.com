import { Div, H2, Span } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/button';
import { Error404SVG } from '@/components/svg';

const NotFoundContent: FC = () => (
  <Div
    mt={['1rem', '6rem']}
    gap="1rem"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <Error404SVG width="100%" maxWidth="29.76rem" maxHeight="29.5125rem" />
    <H2
      color="#FFFFFF"
      fontWeight="600"
      fontFamily="Inter"
      fontSize="2.25rem"
      lineHeight="2.25rem"
    >
      Page Not Found
    </H2>

    <Span
      fontWeight="400"
      color="#9CA3AF"
      fontFamily="Inter"
      fontSize="0.875rem"
    >
      It seems the page you&rsquo;re looking for doesn&rsquo;t exist.
    </Span>
    <Span
      fontWeight="400"
      color="#9CA3AF"
      fontFamily="Inter"
      fontSize="0.875rem"
    >
      Let&rsquo;s get you back on track.
    </Span>

    <Link href="/">
      <Button
        px="1rem"
        py="0.5rem"
        bg="#B4C5FF"
        display="flex"
        height="2.5rem"
        width="11.94rem"
        variant="filled"
        color="#002A78"
        fontSize="1rem"
        fontWeight="500"
        alignItems="center"
        fontFamily="Inter"
        borderRadius="0.75rem"
        justifyContent="center"
      >
        Return to Homepage
      </Button>
    </Link>
  </Div>
);

export default NotFoundContent;
