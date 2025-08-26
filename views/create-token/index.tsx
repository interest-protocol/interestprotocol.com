import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import Layout from '@/components/layout';

import CreateTokenForm from './create-token-form';

const CreateToken: FC = () => (
  <Layout>
    <Div width="100%" display="flex" alignItems="center" flexDirection="column">
      <Div
        display="flex"
        width="100%"
        maxWidth="45.3rem"
        flexDirection="column"
      >
        <P
          mb="1.5rem"
          fontWeight="600"
          color="#FFFFFF"
          fontFamily="Inter"
          fontSize={['1.125rem', '1.75rem']}
        >
          Create Token
        </P>
        <CreateTokenForm />
      </Div>
    </Div>
  </Layout>
);

export default CreateToken;
