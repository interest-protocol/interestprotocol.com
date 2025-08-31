import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { AlertSVG } from '@/components/svg';

import { CreatePoolForm } from '../pool-create.types';

const CardError: FC = () => {
  const { control } = useFormContext<CreatePoolForm>();
  const error = useWatch({ control, name: 'error' });

  if (!error) return null;

  return (
    <Div pb="1.5rem" borderBottom="1px solid #F3F4F61A">
      <Div
        p="0.5rem"
        mt="0.5rem"
        gap="0.3rem"
        bg="#EF444433"
        display="flex"
        height="2.25rem"
        alignItems="center"
        borderRadius="0.75rem"
      >
        <AlertSVG
          width="100%"
          color="#EF4444"
          maxWidth="0.66rem"
          maxHeight="0.66rem"
        />
        <P
          color="#EF4444"
          fontWeight="400"
          fontSize="0.7rem"
          fontFamily="Inter"
          whiteSpace="nowrap"
        >
          {error}
        </P>
      </Div>
    </Div>
  );
};

export default CardError;
