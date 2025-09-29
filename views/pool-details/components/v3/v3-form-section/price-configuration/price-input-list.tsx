import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import Tabs from '@/components/tabs';
import { noop } from '@/utils';
import PriceInput from '@/views/pools/components/price-input';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const PriceInputList: FC = () => {
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();

  const tokenList = getValues('tokenList');
  const [percentageValue, setPercentageValue] = useState(0);
  const percentageValueList = ['+1%', '+5%', '+10%', '+20%'];

  const togglePercentageValue = (tabIndex: number) => {
    setPercentageValue(tabIndex);
  };

  return (
    <>
      <Div
        gap="1rem"
        display="grid"
        flexWrap="wrap"
        gridTemplateColumns={[
          '1fr',
          '1fr',
          '1fr',
          'repeat(auto-fit, minmax(50px, 1fr))',
        ]}
      >
        <PriceInput
          value={1}
          onChange={noop}
          tokenPair={[tokenList[0].symbol, tokenList[1].symbol]}
        />
        <PriceInput
          value={1}
          onChange={noop}
          label="Max Price"
          tokenPair={[tokenList[0].symbol, tokenList[1].symbol]}
        />
      </Div>
      <Div
        display={['flex', 'flex', 'flex', 'grid']}
        gridTemplateColumns="1fr 1fr 1fr 1fr"
      >
        <Tabs
          tab={percentageValue}
          tabs={percentageValueList}
          setTab={togglePercentageValue}
        />
      </Div>
    </>
  );
};

export default PriceInputList;
