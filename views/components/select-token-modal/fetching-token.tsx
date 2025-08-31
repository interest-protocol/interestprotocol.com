import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { ProgressIndicator } from '@/components/progress-indicator';

const FetchingToken: FC = () => (
  <Div
    flex="1"
    py="2rem"
    gap="1.5rem"
    display="flex"
    color="#E2E2E6"
    alignItems="center"
    flexDirection="column"
  >
    <ProgressIndicator variant="loading" />
    <P>Loading...</P>
  </Div>
);

export default FetchingToken;
