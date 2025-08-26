import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { ProgressIndicator } from '@/components/progress-indicator';

const FetchingToken: FC = () => (
  <Div
    p="4xl"
    gap="xl"
    flex="1"
    height="100%"
    display="flex"
    overflowY="auto"
    bg="lowContainer"
    color="onSurface"
    alignItems="center"
    flexDirection="column"
  >
    <ProgressIndicator variant="loading" />
    <P>Loading...</P>
  </Div>
);

export default FetchingToken;
