import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import CreateTokenFormButton from '../create-token-form-button';
import { CreateTokenFormPoolToggle } from '../create-token-form-pool';
import CreateTokenFormPoolForm from '../create-token-form-pool/create-token-form-pool-form';

const CreateTokenFormDeployPool: FC = () => (
  <Div display="flex" gap="1rem" flexDirection="column">
    <P
      color="#E5E7EB"
      fontSize="1rem"
      fontWeight="600"
      fontFamily="Inter"
      lineHeight="1.75rem"
    >
      Features
    </P>

    <Div
      px="1rem"
      py="1.5rem"
      width="100%"
      bg="#9CA3AF1A"
      display="flex"
      height="5.75rem"
      alignItems="center"
      borderRadius="0.75rem"
      border="1px solid #F3F4F61A"
      justifyContent="space-between"
    >
      <Div display="flex" flexDirection="column">
        <P
          mb="0.25rem"
          color="#FFFFFF"
          fontWeight="400"
          fontFamily="Inter"
          fontSize="1.125rem"
          lineHeight="1.25rem"
        >
          Deploy Pool Instantly
        </P>
        <P
          color="#9CA3AF"
          fontSize="1rem"
          fontWeight="400"
          fontFamily="Inter"
          lineHeight="1.25rem"
        >
          This feature will deploy the pool automatically
        </P>
      </Div>
      <CreateTokenFormPoolToggle />
    </Div>
    <CreateTokenFormPoolForm />
    <CreateTokenFormButton />
  </Div>
);

export default CreateTokenFormDeployPool;
