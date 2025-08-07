import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import PoolCreate from '@/views/pool-create';
import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

const PoolCreatePage: NextPage = () => {
  const form = useForm<CreatePoolForm>({
    defaultValues: {
      tokens: [
        {
          name: 'Move',
          symbol: '',
          decimals: 0,
          type: '' as `0x${string}`,
        },
        {
          name: 'THEMOSTLONGTICKEEVERSEENINTHISWORLDDDDDDDDD',
          symbol: '',
          decimals: 0,
          type: '' as `0x${string}`,
        },
      ],
      volatility_strategy_type: 'Memecoins',
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
