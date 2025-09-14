import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import Table from '@/components/table';
import { useTabState } from '@/hooks/use-tab-manager';

import HeaderInfo from '../../components/header-info';
import Filter from './components/filter';
import LiquidityChart from './components/liquidity-chart';
import PoolsChartReports from './components/pools-chart-reports';
import PoolsTabs from './components/pools-tabs';
import PriceInput from './components/price-input';
import {
  FEATURES_POOLS_DATA,
  FEATURES_POOLS_HEADER_DATA,
  HEADER_DATA,
  VERIFIED_POOLS_DATA,
  VERIFIED_POOLS_HEADER_DATA,
} from './pools.data';

const PoolsContent: FC = () => {
  const { tab } = useTabState();
  const [interval, setInterval] = useState('1M');
  const [minPrice, setMinPrice] = useState(1);

  const liquidityData = [
    { price: 3.7, liquidity: 50 },
    { price: 3.8, liquidity: 80 },
    { price: 3.9, liquidity: 65 },
    { price: 4.0, liquidity: 100 },
    { price: 4.1, liquidity: 70 },
    { price: 4.2, liquidity: 60 },
  ];

  return (
    <Div
      gap="1rem"
      display="flex"
      flexDirection="column"
      mt={['1rem', '1rem', '1rem', '2.5rem']}
    >
      <Div width="26rem" margin="2rem auto">
        <LiquidityChart
          data={liquidityData}
          initialMin={3.8}
          initialMax={4.1}
        />
      </Div>
      <PriceInput
        label="Min price"
        value={minPrice}
        onChange={setMinPrice}
        tokenPair={['USDC', 'USDT']}
      />
      <Div
        gap="1rem"
        width="100%"
        display="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={['flex-start', 'flex-start', 'flex-start', 'end']}
      >
        {HEADER_DATA.map((info) => (
          <HeaderInfo key={v4()} {...info} />
        ))}
        <Filter
          interval={interval}
          setInterval={setInterval}
          options={['1W', '1M', '3M', '1Y']}
        />
      </Div>

      <PoolsChartReports />

      <PoolsTabs />
      {
        [
          <Table
            key={v4()}
            rows={VERIFIED_POOLS_DATA}
            title={VERIFIED_POOLS_HEADER_DATA}
            gridTemplateColumns="repeat(6, 1fr)"
          />,
          <Table
            key={v4()}
            rows={FEATURES_POOLS_DATA}
            title={FEATURES_POOLS_HEADER_DATA}
            gridTemplateColumns="repeat(6, 1fr)"
          />,
        ][tab]
      }
    </Div>
  );
};

export default PoolsContent;
