import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import Breadcrumb from '@/components/breadcrumb';
import Tabs from '@/components/tabs';
import { useTabState } from '@/hooks';
import { noop } from '@/utils';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import BreadcrumbActions from './breadcrumb-actions';
import PoolTokenInfo from './pool-token-info';
import APR from './pool-token-info/apr';
import PoolTokenInfoAction from './pool-token-info-action';

const PoolDetailsHeaderSummary: FC = () => {
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();
  const { tab, setTab } = useTabState();
  const tabs = ['Pool', 'Farm'];

  const tokenList = getValues('tokenList');

  return (
    <>
      <Div
        display="flex"
        flexDirection="column"
        gap={['0.5rem', '0.5rem', '0.5rem', '1rem']}
      >
        <Div display="flex" justifyContent="space-between">
          <Breadcrumb
            basePage="Pools"
            currentPage={`${tokenList[0].symbol}-${tokenList[1].symbol}`}
          />
          <BreadcrumbActions />
        </Div>
        <Div
          display="flex"
          justifyContent="space-between"
          gap={['0.5rem', '0.5rem', '0.5rem', '1rem']}
          flexDirection={['column', 'column', 'column', 'row']}
        >
          <PoolTokenInfo />
          <Div
            display="flex"
            gap={['0.5rem', '0.5rem', '0.5rem', '1rem']}
            flexDirection={['column', 'column', 'column', 'row']}
          >
            <PoolTokenInfoAction label="Pending rewards:" amount={0.0} />
            <PoolTokenInfoAction
              label="Claim rewards:"
              amount={0.0}
              onClaim={noop}
            />
          </Div>
        </Div>
      </Div>
      <Div
        gap="1rem"
        width="100%"
        display="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row', 'row']}
      >
        <Div display="flex" width={['100%', '100%', '100%', 'unset']}>
          <Tabs tabs={tabs} setTab={setTab} tab={tab} color="#6067F9" />
        </Div>
        <Div display={['none', 'none', 'none', 'block']}>
          <APR />
        </Div>
      </Div>
    </>
  );
};
export default PoolDetailsHeaderSummary;
