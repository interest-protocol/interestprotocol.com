import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import PriceConfiguration from './price-configuration';
import V3Form from './v3-form';

const V3FormSection: FC = () => {
  return (
    <Div
      display="flex"
      width="100%"
      flexDirection="column"
      gap={['1rem', '1rem', '1rem', '2rem']}
    >
      <PriceConfiguration />
      <V3Form />
    </Div>
  );
};

export default V3FormSection;
