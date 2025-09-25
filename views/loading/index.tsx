import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Loading from '@/components/loading';

const LoadingView: FC = () => (
  <Div
    width="100vw"
    display="flex"
    height="100vh"
    bg="#0D0D11"
    alignItems="center"
    position="relative"
    flexDirection="column"
    justifyContent="center"
  >
    <Loading />
  </Div>
);

export default LoadingView;
