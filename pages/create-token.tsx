import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { SEO } from '@/components';
import CreateToken from '@/views/create-token';
import { CreateTokenFormStep } from '@/views/create-token/create-token.types';
import { validationSchema } from '@/views/create-token/create-token-form/create-token-form.validation';

const CreateTokenPage: NextPage = () => {
  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      decimals: 8,
      fixedSupply: true,
      pool: { active: true },
      supply: 1_000_000_000,
      step: CreateTokenFormStep.PresetInfo,
    },
  });

  return (
    <FormProvider {...form}>
      <SEO title="Create Token" />
      <CreateToken />
    </FormProvider>
  );
};

export default CreateTokenPage;
