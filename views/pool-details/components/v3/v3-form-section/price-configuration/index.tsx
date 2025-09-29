import { Div, P, Span } from '@stylin.js/elements';
import { FC, useState } from 'react';

import Tabs from '@/components/tabs';
import LiquidityChart from '@/views/pools/components/liquidity-chart';

import { LIQUIDITY_DATA } from '../../v3.data';
import CurrentPrice from './current-price';
import PriceInputList from './price-input-list';

const PriceConfiguration: FC = () => {
  const [priceTabRange, setPriceTabRange] = useState(0);
  const priceTabRangeList = ['Custom Range', 'Full Position'];

  const togglePriceValue = (tabIndex: number) => {
    setPriceTabRange(tabIndex);
  };

  return (
    <Div
      display="flex"
      width="100%"
      flexDirection="column"
      gap={['1rem', '1rem', '1rem', '2rem']}
    >
      <Div
        gridTemplateColumns="1fr 1fr"
        display={['flex', 'flex', 'flex', 'grid']}
      >
        <Tabs
          tabs={priceTabRangeList}
          setTab={togglePriceValue}
          tab={priceTabRange}
        />
      </Div>
      <Div display="flex" justifyContent="space-between">
        <CurrentPrice />
        <Div display="flex" flexDirection="column" gap="4px">
          <P
            fontWeight="400"
            color="#9CA3AF"
            fontFamily="Inter"
            fontSize="0.875rem"
            lineHeight="1.25rem"
          >
            Leverage
          </P>
          <Span
            fontSize="1rem"
            fontWeight="500"
            color="#34D399"
            textAlign="right"
            fontFamily="Inter"
            lineHeight="1.25rem"
          >
            67.17x
          </Span>
        </Div>
      </Div>
      <Div display="flex" flexDirection="column" gap="1rem">
        {!priceTabRange && (
          <LiquidityChart
            initialMin={3.9}
            initialMax={5.1}
            data={LIQUIDITY_DATA}
          />
        )}
        <PriceInputList />
      </Div>
    </Div>
  );
};

export default PriceConfiguration;
