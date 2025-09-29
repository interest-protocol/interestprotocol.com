import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import { TOKENS } from '@/constants/coins';
import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';
import { parseToMetadata, ZERO_BIG_NUMBER } from '@/utils';
import { CoinMetadata, FAMetadata } from '@/utils/coin/coin.types';
import PoolDetails from '@/views/pool-details';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const PoolDetailsPage: NextPage = () => {
  const form = useForm<PortfolioDetailsFormProps>({
    defaultValues: {
      lpCoin: {
        ...(parseToMetadata(
          TOKENS[2] as unknown as CoinMetadata | FAMetadata
        ) as AssetMetadata),
        value: '',
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
      <PoolDetails />
    </FormProvider>
  );
};
export default PoolDetailsPage;
