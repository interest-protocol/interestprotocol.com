import { FC } from 'react';

import Layout from '@/components/layout';

import { PoolDetailsProps } from './pool-details.types';
import PoolDetailsContent from './pool-details-content';

const PoolDetails: FC<PoolDetailsProps> = ({ isV3 }) => {
  return (
    <Layout>
      <PoolDetailsContent isV3={isV3} />
    </Layout>
  );
};

export default PoolDetails;
