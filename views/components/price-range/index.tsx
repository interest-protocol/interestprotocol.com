import { P } from '@stylin.js/elements';
import { FC } from 'react';

import { useCurveLPPrice } from '@/hooks/use-v2-lp-price';
import { formatDollars } from '@/utils';

import { PriceRangeProps } from './price-range.types';

const PriceRange: FC<PriceRangeProps> = ({ address }) => {
  const { data } = useCurveLPPrice(address);

  const price = data?.lpPrice;

  return (
    <P
      width="100%"
      color="#FFFFFF"
      textAlign="right"
      fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
      data-sort-value={formatDollars(price ? +price.toFixed(4) : 0)}
    >
      {formatDollars(price ? +price.toFixed(4) : 0)}
    </P>
  );
};

export default PriceRange;
