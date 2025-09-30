import { Div } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import { CogsSVG } from '@/components/svg';
import Tabs from '@/components/tabs';
import { ZERO_BIG_NUMBER } from '@/utils';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import PoolDetailsInfo from '../../pool-details-info';
import PoolFormDeposit from './pool-form/deposit';
import PoolFormWithdraw from './pool-form/withdraw';

const TABS = ['Deposit', 'Withdraw'];

const PoolFormSection: FC = () => {
  const [poolTabs, setPoolTabs] = useState(0);
  const { pool } = usePoolDetailsContext();

  const form = useForm<PortfolioDetailsFormProps>({
    defaultValues: {
      poolAddress: pool.poolAddress,
      lpCoin: { ...pool.poolMetadata, value: '0', valueBN: ZERO_BIG_NUMBER },
      tokenList: pool.tokensMetadata?.map((token) => ({
        ...token,
        value: '0',
        valueBN: ZERO_BIG_NUMBER,
      })),
    },
  });

  useEffect(() => {
    if (!pool.tokensMetadata || !pool.poolMetadata) return;

    form.setValue('lpCoin', {
      ...pool.poolMetadata,
      value: '0',
      valueBN: ZERO_BIG_NUMBER,
    });

    form.setValue(
      'tokenList',
      pool.tokensMetadata?.map((token) => ({
        ...token,
        value: '0',
        valueBN: ZERO_BIG_NUMBER,
      }))
    );
  }, [pool]);

  return (
    <FormProvider {...form}>
      <Div
        gap="2rem"
        display="flex"
        flexDirection="column"
        mb={['0.5rem', '0.5rem', '0.5rem', 'unset']}
      >
        <Div>
          <Div
            gap="1rem"
            mb="0.75rem"
            width="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Div display="flex">
              <Tabs tabs={TABS} setTab={setPoolTabs} tab={poolTabs} />
            </Div>
            <Div cursor="pointer" color="#9CA3AF" nHover={{ color: '#B4C5FF' }}>
              <CogsSVG maxWidth="1.25rem" maxHeight="1.25rem" width="1.25rem" />
            </Div>
          </Div>
          {
            [<PoolFormDeposit key={v4()} />, <PoolFormWithdraw key={v4()} />][
              poolTabs
            ]
          }
        </Div>
        <Div display={['none', 'none', 'none', 'flex']} width="100%">
          <PoolDetailsInfo />
        </Div>
      </Div>
    </FormProvider>
  );
};

export default PoolFormSection;
