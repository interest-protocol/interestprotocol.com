import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { FarmFormProps } from '../farm-form.types';
import Input from './components/input';
import FarmFormButton from './farm-form-button';

const FarmForm: FC<FarmFormProps> = ({ isStake }) => (
  <Div display="flex" flexDirection="column" gap="0.75rem">
    <Div display="flex" flexDirection="column" gap="0.35rem">
      <Input field="lpCoin" isStake={isStake} />
    </Div>
    <FarmFormButton isStake={isStake} />
  </Div>
);

export default FarmForm;
