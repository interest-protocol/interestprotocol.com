import { Div, H2 } from '@stylin.js/elements';
import { FC } from 'react';

const NotFoundContent: FC = () => (
  <Div display="flex" mt={['1rem', '6rem']}>
    <Div display="flex" flexDirection="column" gap="1rem">
      <H2 fontFamily="Inter" fontWeight="600">
        Page Not Found
      </H2>
    </Div>
  </Div>
);

export default NotFoundContent;
