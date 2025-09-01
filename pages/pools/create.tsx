import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { ZERO_BIG_NUMBER } from '@/utils';
import PoolCreate from '@/views/pool-create';
import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

const PoolCreatePage: NextPage = () => {
  const form = useForm<CreatePoolForm>({
    defaultValues: {
      tokens: [
        {
          value: '',
          valueBN: ZERO_BIG_NUMBER,
        },
        {
          value: '',
          valueBN: ZERO_BIG_NUMBER,
        },
      ],
      volatilityStrategyType: '',
    },
  });

  return (
    <FormProvider {...form}>
      <PoolCreate />
    </FormProvider>
  );
};

export default PoolCreatePage;
