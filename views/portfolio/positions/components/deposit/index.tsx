import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Input from './components/input';

const Deposit: FC = () => (
  <Div display="flex" flexDirection="column">
    <Input index={0} />
    <Input index={1} />
  </Div>
);

export default Deposit;
