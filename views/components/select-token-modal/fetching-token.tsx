import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

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
    <Skeleton width={80} height={16} />
  </Div>
);

export default FetchingToken;
