import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import { TOKENS } from '@/constants/coins';
import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';
import { parseToMetadata, ZERO_BIG_NUMBER } from '@/utils';
import { CoinMetadata, FAMetadata } from '@/utils/coin/coin.types';
import PortfolioPositions from '@/views/portfolio/positions';
import { CreateDepositForm } from '@/views/portfolio/positions/components/deposit/deposit.types';

const PortfolioPositionsPage: NextPage = () => {
  const form = useForm<CreateDepositForm>({
    defaultValues: {
      tokens: [
        {
          ...(parseToMetadata({
            name: TOKENS[0].name,
            symbol: TOKENS[0].symbol,
            iconUri: TOKENS[0].iconUri,
            address: TOKENS[0].address,
            decimals: TOKENS[0].decimals,
            projectUri: TOKENS[0].projectUri ?? '',
          } as FAMetadata) as AssetMetadata),
          value: '',
          valueBN: ZERO_BIG_NUMBER,
        },
        {
          ...(parseToMetadata(
            TOKENS[1] as unknown as CoinMetadata | FAMetadata
          ) as AssetMetadata),
          value: '',
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

export default PortfolioPositionsPage;
