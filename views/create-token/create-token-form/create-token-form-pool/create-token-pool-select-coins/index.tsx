import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Input from './input';

const CreateTokenPoolSelectCoins: FC = () => (
  <Div gap="1rem" display="flex" alignItems="center" flexDirection="column">
    <Input label="quote" />
    <Input label="token" />
  </Div>
);

export default CreateTokenPoolSelectCoins;
