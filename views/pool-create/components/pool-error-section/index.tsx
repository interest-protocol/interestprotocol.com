import { FC } from 'react';

import { CreatePoolErrorManager } from './pool-error-manager';
import CreatePoolErrorMessage from './pool-error-message';

const CreatePoolError: FC = () => {
  return (
    <>
      <CreatePoolErrorManager />
      <CreatePoolErrorMessage />
    </>
  );
};

export default CreatePoolError;
