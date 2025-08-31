import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { CreatePoolForm } from '../pool-create.types';

const PoolCreateFormButton: FC = () => {
  const { control } = useFormContext<CreatePoolForm>();

  const values = useWatch({ control });

  const isValidToken = (t?: { type?: string; value?: string }) =>
    t?.type && Number(t?.value) > 0;

  const isRequiredFieldsFilled =
    (values?.tokens?.length ?? 0) >= 2 &&
    [0, 1].every((i) => isValidToken(values?.tokens?.[i])) &&
    values?.volatilityStrategyType;

  return (
    <Div
      mt="0.5rem"
      gap="1.5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        py="1rem"
        width="100%"
        border="none"
        fontSize="1rem"
        fontWeight="500"
        cursor="pointer"
        fontFamily="Inter"
        borderRadius="0.75rem"
        justifyContent="center"
        disabled={!isRequiredFieldsFilled}
        bg={!isRequiredFieldsFilled ? '#9CA3AF1A' : '#B4C5FF'}
        color={!isRequiredFieldsFilled ? '#9CA3AF' : '#002A78'}
      >
        Create Pool
      </Button>
    </Div>
  );
};

export default PoolCreateFormButton;
