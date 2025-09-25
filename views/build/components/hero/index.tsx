import { Div, H2, Span } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Button } from '@/components/button';

import { SOCIAL_LINK } from '../social-link.data';

const Hero: FC = () => (
  <Div
    zIndex="1"
    mt="10.75rem"
    gap="1.25rem"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <Button
      py="0"
      px="1rem"
      gap="0.375rem"
      width="8.5rem"
      height="1.625rem"
      variant="outline"
      bg="#FFFFFF0D"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="2.875rem"
      border="1px solid #44444A"
    >
      We&rsquo;ll Be Back Soon
    </Button>
    <H2
      color="#FFFFFF"
      fontWeight="500"
      fontFamily="Inter"
      textAlign="center"
      letterSpacing="3%"
      fontSize={['2rem', '3.5rem']}
    >
      Our Website is Under Construction
    </H2>
    <Span
      width="50%"
      fontSize="1rem"
      color="#ACB5BB"
      fontWeight="500"
      fontFamily="Inter"
      textAlign="center"
    >
      We&rsquo;re making improvements and will be back online soon! Thank you
      for your patience and support. For more information or assistance, feel
      free to contact us anytime.
    </Span>
    <Div display="flex" gap="0.75rem">
      {SOCIAL_LINK.map(({ title, pathname, Icon }) => (
        <Link
          key={v4()}
          href={pathname}
          target="_blank"
          rel="noreferrer"
          title={`Follow us on ${title}`}
        >
          <Div
            width="2rem"
            height="2em"
            color="#161618"
            transition="0.3s"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="2.875rem"
            border="1px solid #44444A"
            nHover={{ color: '#B4C5FF' }}
          >
            <Icon
              width="100%"
              maxWidth="1rem"
              cursor="pointer"
              maxHeight="1rem"
              color="#FFFFFF"
            />
          </Div>
        </Link>
      ))}
    </Div>
  </Div>
);

export default Hero;
