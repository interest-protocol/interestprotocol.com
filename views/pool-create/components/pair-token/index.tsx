import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import Input from './input';

const PairTokenSection: FC = () => {
  return (
    <Div gap="1rem" display="flex" flexDirection="column">
      <P
        fontSize="1rem"
        color="#E5E7EB"
        fontWeight="600"
        fontFamily="Inter"
        lineHeight="1.75rem"
      >
        Select token pair and enter the initial amount
      </P>

      <Div
        width="100%"
        display="grid"
        alignItems="center"
        gap={['1rem', '0.75rem']}
        justifyContent="space-between"
        gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
      >
        <Input index={0} />
        <Input index={1} />
      </Div>
    </Div>
  );
};

export default PairTokenSection;
