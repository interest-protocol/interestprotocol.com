import { Div, P } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Layout from '@/components/layout';

const PoolCreateWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Div
        mx="auto"
        width="100%"
        height="auto"
        display="flex"
        maxWidth="54rem"
        p={['1.5rem', '0']}
        flexDirection="column"
        mt={['1rem', '1rem', '1rem', '2.5rem']}
      >
        <P
          color="#FFFFFF"
          fontWeight="600"
          fontFamily="Inter"
          lineHeight="1.75rem"
          mb={['1rem', '1.5rem']}
          fontSize={['1.5rem', '1.75rem']}
        >
          Create Pool
        </P>
        <Div
          p="1.5rem"
          gap="1.5rem"
          width="100%"
          height="100%"
          display="flex"
          bg="#9CA3AF1A"
          flexDirection="column"
          borderRadius="0.75rem"
          borderTop="0.375rem solid #9CA3AF1A"
        >
          {children}
        </Div>
      </Div>
    </Layout>
  );
};

export default PoolCreateWrapper;
