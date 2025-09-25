import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import { withAddressGuard } from '@/components/hoc';
import { Routes, RoutesEnum } from '@/constants';
import { TOKENS } from '@/constants/coins';
import { PortfolioDetailsPageProps } from '@/interface';
import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';
import { parseToMetadata, ZERO_BIG_NUMBER } from '@/utils';
import { CoinMetadata, FAMetadata } from '@/utils/coin/coin.types';
import PortfolioPositions from '@/views/portfolio-details';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const PortfolioDetailsPage: NextPage<PortfolioDetailsPageProps> = ({
  address,
}) => {
  console.log(address);
  const form = useForm<PortfolioDetailsFormProps>({
    defaultValues: {
      lpCoin: {
        ...(parseToMetadata(
          TOKENS[2] as unknown as CoinMetadata | FAMetadata
        ) as AssetMetadata),
        value: '0',
        valueBN: ZERO_BIG_NUMBER,
      },
      tokenList: [
        {
          ...(parseToMetadata(
            TOKENS[3] as unknown as CoinMetadata | FAMetadata
          ) as AssetMetadata),
          value: '43',
          valueBN: ZERO_BIG_NUMBER,
        },
        {
          ...(parseToMetadata(
            TOKENS[4] as unknown as CoinMetadata | FAMetadata
          ) as AssetMetadata),
          value: '10',
          valueBN: ZERO_BIG_NUMBER,
        },
      ],
    },
  });

  return (
    <FormProvider {...form}>
      <SEO />
      <PortfolioPositions />
    </FormProvider>
  );
};

export default withAddressGuard(Routes[RoutesEnum.Portfolio])(
  PortfolioDetailsPage
);
