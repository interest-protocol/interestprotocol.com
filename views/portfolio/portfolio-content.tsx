import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Dropdown from '@/components/dropdown';
import { useModal } from '@/hooks';

import PoolTypeTable from './components/pool-type-table';
import {
  POOL_TYPE_DATA,
  POOL_TYPE_HEADER_DATA,
  TRANSACTION_DATA,
  TRANSACTION_HEADER_DATA,
} from './components/pool-type-table/pools.data';
import {
  TableSummaryCustomProps,
  TableSummaryProps,
} from './components/table-summary/table-summary.types';
import RewardsModal from './components/table-summary/table-summary-earnings/components/rewards-modal';
import { TRANSACTION_FILTER_DATA } from './portfolio.data';
import PortfolioSummary from './portfolio-summary';

const PortfolioContent: FC = () => {
  const { setContent } = useModal();
  const CURVE_HEADER_SUMMARY: TableSummaryProps = {
    onClaim: () =>
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
      ),
    gain: '38.88 MOVE',
    title: 'Curve pools',
    total: '12',
  };

  const V3_HEADER_SUMMARY: TableSummaryProps = {
    onClaim: () =>
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
      ),
    totalPosition: '3',
    gain: '38.88 MOVE',
    title: 'v3',
    total: '12',
  };

  const TRANSACTION_HEADER_SUMMARY: TableSummaryCustomProps = {
    title: 'Transactions',
    total: '12',
    Filter: (
      <Dropdown isRounded options={TRANSACTION_FILTER_DATA} defaultIndex={1} />
    ),
  };

  return (
    <Div
      pb="5rem"
      mt="2.5rem"
      width="100%"
      display="flex"
      flexDirection="column"
      gap={['1rem', '2rem']}
      px={['unset', 'unset', 'unset', '5.5rem']}
    >
      <PortfolioSummary />
      <PoolTypeTable
        rows={POOL_TYPE_DATA}
        tableHeader={POOL_TYPE_HEADER_DATA}
        headerSummary={CURVE_HEADER_SUMMARY}
      />
      <PoolTypeTable
        rows={POOL_TYPE_DATA}
        tableHeader={POOL_TYPE_HEADER_DATA}
        headerSummary={V3_HEADER_SUMMARY}
      />
      <PoolTypeTable
        rows={TRANSACTION_DATA}
        tableHeader={TRANSACTION_HEADER_DATA}
        headerSummary={TRANSACTION_HEADER_SUMMARY}
        gridTemplateColumns="2fr 3fr 4fr 4fr 1fr"
      />
    </Div>
  );
};

export default PortfolioContent;
