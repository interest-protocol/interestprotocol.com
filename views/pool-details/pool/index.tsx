import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

const Pool: FC = () => (
  <Div
    mb="4rem"
    gap="1rem"
    display="flex"
    flexDirection="column"
    mt={['1rem', '1rem', '1rem', '2.5rem']}
  >
    <P color="#fff">Pool Section</P>
  </Div>
);

export default Pool;
