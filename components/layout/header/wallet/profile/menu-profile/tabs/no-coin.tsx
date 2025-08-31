import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { ExclamationCircleSVG } from '@/components/svg';

const NoCoin: FC = () => (
  <Div
    gap="1rem"
    display="flex"
    color="#9CA3AF"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <ExclamationCircleSVG
      width="1.25rem"
      height="1.25rem"
      maxHeight="100%"
      maxWidth="100%"
    />
    <P fontFamily="Inter" fontWeight="700" fontSize="1rem" lineHeight="1.5rem">
      No tokens found
    </P>
    <P
      fontWeight="400"
      fontSize="0.875rem"
      fontFamily="Inter"
      lineHeight="1.5rem"
      textAlign="center"
    >
      We couldn&apos;t find any tokens matching your criteria.
    </P>
  </Div>
);

export default NoCoin;
