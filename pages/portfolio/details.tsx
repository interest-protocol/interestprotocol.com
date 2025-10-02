import { NextPage } from 'next';

import { SEO } from '@/components';
import { withAddressGuard } from '@/components/hoc';
import { Routes, RoutesEnum } from '@/constants';
import { PortfolioDetailsPageProps } from '@/interface';
import { PoolDetailsProvider } from '@/views/pool-details/pool-details.context';
import PortfolioPositions from '@/views/portfolio-details';

const PortfolioDetailsPage: NextPage<PortfolioDetailsPageProps> = ({
  address,
}) => (
  <PoolDetailsProvider address={address}>
    <SEO />
    <PortfolioPositions />
  </PoolDetailsProvider>
);

export default withAddressGuard(Routes[RoutesEnum.Portfolio])(
  PortfolioDetailsPage
);
