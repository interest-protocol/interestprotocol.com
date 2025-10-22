import { Div } from '@stylin.js/elements';
import { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import { useTabState } from '@/hooks/use-tab-manager';
import { ZERO_BIG_NUMBER } from '@/utils';

import Farm from '../components/farm';
import { usePoolDetailsContext } from '../pool-details/pool-details.context';
import PoolDetailsHeader from './components/header';
import PositionsDetailsTabs from './components/portfolio-details-tabs';
import Position from './components/position';
import { PortfolioDetailsFormProps } from './portfolio-details.types';

const PortfolioDetailContent: FC = () => {
  const { tab } = useTabState();
  const { pool } = usePoolDetailsContext();

  const form = useForm<PortfolioDetailsFormProps>({
    defaultValues: {
      poolAddress: pool.poolAddress,
      lpCoin: { ...pool.poolMetadata, value: '', valueBN: ZERO_BIG_NUMBER },
      tokenList: pool.tokensMetadata?.map((token) => ({
        ...token,
        value: '',
        valueBN: ZERO_BIG_NUMBER,
      })),
    },
  });

  useEffect(() => {
    if (!pool.tokensMetadata || !pool.poolMetadata) return;

    form.setValue('lpCoin', {
      ...pool.poolMetadata,
      value: '',
      valueBN: ZERO_BIG_NUMBER,
    });

    form.setValue(
      'tokenList',
      pool.tokensMetadata?.map((token) => ({
        ...token,
        value: '',
        valueBN: ZERO_BIG_NUMBER,
      }))
    );
  }, [pool]);

  return (
    <FormProvider {...form}>
      <Div
        mb="5rem"
        width="100%"
        display="flex"
        flexDirection="column"
        gap={['1rem', '2rem']}
        mt={['1rem', '2.5rem']}
      >
        <Div
          gap="1rem"
          display="flex"
          flexDirection={[
            'column-reverse',
            'column-reverse',
            'column-reverse',
            'column',
          ]}
        >
          <PoolDetailsHeader />
          <PositionsDetailsTabs />
        </Div>
        {[<Position key={v4()} />, <Farm key={v4()} />][tab]}
      </Div>
    </FormProvider>
  );
};

export default PortfolioDetailContent;
