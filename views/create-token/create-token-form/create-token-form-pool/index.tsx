import { Div, P } from '@stylin.js/elements';
import { not } from 'ramda';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { ToggleButton } from '@/components/toggle';

import { ICreateTokenForm } from '../../create-token.types';
import CreateTokenFormPoolForm from './create-token-form-pool-form';

export const CreateTokenFormPoolToggle: FC = () => {
  const { control, setValue } = useFormContext<ICreateTokenForm>();
  const value = useWatch({ control, name: 'pool.active' });
  return (
    <ToggleButton
      name="Fixed Supply"
      defaultValue={value}
      onClick={() => setValue('pool.active', not(value))}
    />
  );
};

const CreateTokenFormPool: FC = () => (
  <Div
    p="m"
    my="xl"
    gap="m"
    bg="surface"
    display="flex"
    borderRadius="xs"
    flexDirection="column"
  >
    <Div display="flex" justifyContent="space-between" color="#E2E2E6">
      <P>Deploy Pool Instantly</P>
      <CreateTokenFormPoolToggle />
    </Div>
    <P color="#E2E2E6" opacity={0.6}>
      This feature will deploy the pool automatically
    </P>
    <CreateTokenFormPoolForm />
  </Div>
);

export default CreateTokenFormPool;
