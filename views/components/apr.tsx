import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import Tag from '@/components/tag';

const APR: FC = () => (
  <Div display="flex" gap="0.5rem" alignItems="center">
    <P
      fontWeight="500"
      color="#949E9E"
      fontSize="0.875rem"
      lineHeight="1.25rem"
    >
      APR
    </P>
    <Tag label="29.17%" type="success" />
  </Div>
);

export default APR;
