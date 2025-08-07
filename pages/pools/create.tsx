import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import { TOKENS } from '@/constants/coins';
import { parseToMetadata, ZERO_BIG_NUMBER } from '@/utils';
import { FAMetadata } from '@/utils/coin/coin.types';
import PoolCreate from '@/views/pool-create';
import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

const PoolCreatePage: NextPage = () => {
  const form = useForm<CreatePoolForm>({
    defaultValues: {
      tokens: [
        {
          ...parseToMetadata({
            name: TOKENS[0].name,
            symbol: TOKENS[0].symbol,
            iconUri: TOKENS[0].iconUri,
            address: TOKENS[0].address,
            decimals: TOKENS[0].decimals,
            projectUri: TOKENS[0].projectUri ?? '',
          } as FAMetadata),
          value: '',
          valueBN: ZERO_BIG_NUMBER,
        },
        {
          ...parseToMetadata({
            name: TOKENS[1].name,
            symbol: TOKENS[1].symbol,
            iconUri: TOKENS[1].iconUri,
            address: TOKENS[1].address,
            decimals: TOKENS[1].decimals,
            projectUri: TOKENS[1].projectUri ?? '',
          } as FAMetadata),
          value: '',
          valueBN: ZERO_BIG_NUMBER,
        },
      ],
      volatilityStrategyType: '',
    },
  });

  return (
    <FormProvider {...form}>
      <SEO pageTitle="Pool Create" />
      <PoolCreate />
    </FormProvider>
  );
};

export default PoolCreatePage;
