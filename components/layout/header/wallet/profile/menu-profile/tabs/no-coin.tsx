import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { ExclamationCircleSVG } from '@/components/svg';

const NoCoin: FC = () => (
  <Div
    gap="0.75rem"
    display="flex"
    color="#9CA3AF"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    borderRadius="0.5rem"
    border={[
      '0.5px solid #030712',
      '0.5px solid #030712',
      '0.5px solid #030712',
      'none',
    ]}
  >
    <ExclamationCircleSVG
      width="1.25rem"
      height="1.25rem"
      maxHeight="100%"
      maxWidth="100%"
    />
    <P
      fontFamily="Inter"
      fontWeight="700"
      lineHeight="1.5rem"
      fontSize={['0.875rem', '0.875rem', '0.875rem', '1rem']}
    >
      No tokens found
    </P>
    <P
      fontWeight="400"
      fontFamily="Inter"
      lineHeight="1.5rem"
      textAlign="center"
      fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
    >
      We couldn&apos;t find any tokens matching your criteria.
    </P>
  </Div>
);

export default NoCoin;
