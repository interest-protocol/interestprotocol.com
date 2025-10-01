import { NextPage } from 'next';

import { SEO } from '@/components';
import { withAddressGuard } from '@/components/hoc';
import { Routes, RoutesEnum } from '@/constants';
import { PoolPageProps } from '@/interface';
import PoolDetails from '@/views/pool-details';
import { PoolDetailsProvider } from '@/views/pool-details/pool-details.context';

const PoolDetailsPage: NextPage<PoolPageProps> = ({ address }) => (
  <PoolDetailsProvider address={address}>
    <SEO />
    <PoolDetails />
  </PoolDetailsProvider>
);

export default withAddressGuard(Routes[RoutesEnum.Pool])(PoolDetailsPage);
