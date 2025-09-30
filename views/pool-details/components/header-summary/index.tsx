import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import Breadcrumb from '@/components/breadcrumb';
import Tabs from '@/components/tabs';
import { useModal, useTabState } from '@/hooks';
import APR from '@/views/components/apr';
import RewardsModal from '@/views/components/rewards-modal';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import TokenInfo from '../../../components/token-info';
import TokenInfoAction from '../../../components/token-info-action';
import { PoolDetailsProps } from '../../pool-details.types';
import BreadcrumbActions from './breadcrumb-actions';

const PoolDetailsHeaderSummary: FC<PoolDetailsProps> = ({ isV3 }) => {
  const { setContent } = useModal();
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();
  const { tab, setTab } = useTabState();
  const tabs = ['Pool', 'Farm'];

  const tokenList = getValues('tokenList');

  const onClaim = () =>
    setContent(
      <RewardsModal
        claimingFee="0.123"
        totalEarnings="0.00"
        rewardFee="0.00"
        rewardsList={[
          {
            amount: '0.00',
            symbol: 'MOVE',
          },
          {
            amount: '0.00',
            symbol: 'USDC.e',
          },
          {
            amount: '0.00',
            symbol: 'USDT.e',
          },
          {
            amount: '0.00',
            symbol: 'WBTC.e',
          },
        ]}
      />,
      {
        title: 'Rewards',
      }
    );

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
          <TokenInfo isV3={isV3} />
          <Div
            display="flex"
            gap={['0.5rem', '0.5rem', '0.5rem', '1rem']}
            flexDirection={['column', 'column', 'column', 'row']}
          >
            <TokenInfoAction label="Pending rewards:" amount={0.0} />
            <TokenInfoAction
              label="Claim rewards:"
              amount={0.0}
              onClaim={onClaim}
            />
          </Div>
        </Div>
      </Div>
      {!isV3 && (
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
      )}
    </>
  );
};

export default PoolDetailsHeaderSummary;
