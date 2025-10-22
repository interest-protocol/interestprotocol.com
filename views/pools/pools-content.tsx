import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import PoolsTabs from './components/pools-tabs';
import PoolsHeader from './pools-header';
import PoolsTableCurve from './pools-table-curve';

const PoolsContent: FC = () => {
  const form = useForm({ defaultValues: { search: '' } });

  return (
    <FormProvider {...form}>
      <Div
        mb="4rem"
        gap="1rem"
        display="flex"
        flexDirection="column"
        mt={['1rem', '1rem', '1rem', '2.5rem']}
        px={['unset', 'unset', 'unset', '3.5rem']}
      >
        <PoolsHeader />
        <PoolsTabs />
        <PoolsTableCurve key={v4()} />
      </Div>
    </FormProvider>
  );
};

export default PoolsContent;
