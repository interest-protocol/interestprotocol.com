import { Box, Button } from '@interest-protocol/ui-kit';
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
    <Box
      mt="0.5rem"
      gap="1.5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        py="1rem"
        width="100%"
        bg="#B4C5FF"
        fontSize="1rem"
        variant="filled"
        fontWeight="500"
        fontFamily="Inter"
        borderRadius="0.75rem"
        justifyContent="center"
        disabled={!isRequiredFieldsFilled}
      >
        Create Pool
      </Button>
    </Box>
  );
};

export default PoolCreateFormButton;
