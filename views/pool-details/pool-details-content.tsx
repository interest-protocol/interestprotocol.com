import { Div } from '@stylin.js/elements';
import { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import { useTabState } from '@/hooks';
import { ZERO_BIG_NUMBER } from '@/utils';

import Farm from '../components/farm';
import { PortfolioDetailsFormProps } from '../portfolio-details/portfolio-details.types';
import PoolDetailsHeaderSummary from './components/header-summary';
import Pool from './components/pool';
import V3 from './components/v3';
import { usePoolDetailsContext } from './pool-details.context';
import { PoolDetailsProps } from './pool-details.types';

const PoolDetailsContent: FC<PoolDetailsProps> = ({ isV3 }) => {
  const { tab } = useTabState();
  const { pool } = usePoolDetailsContext();

  const form = useForm<PortfolioDetailsFormProps>({
    defaultValues: {
      selectedCoinIndex: [0, 1],
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
        mb="4rem"
        display="flex"
        flexDirection="column"
        gap={['1rem', '1rem', '1rem', '2rem']}
        mt={['1rem', '1rem', '1rem', '2.5rem']}
        px={['unset', 'unset', 'unset', '3.5rem']}
      >
        <PoolDetailsHeaderSummary isV3={isV3} />
        {isV3 ? <V3 /> : [<Pool key={v4()} />, <Farm key={v4()} />][tab]}
      </Div>
    </FormProvider>
  );
};

export default PoolDetailsContent;
