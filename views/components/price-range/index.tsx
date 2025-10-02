import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import Tag from '@/components/tag';
import { useCurveLPPrice } from '@/hooks/use-v2-lp-price';
import { formatDollars } from '@/utils';

import { PriceRangeProps } from './price-range.types';

const PriceRange: FC<PriceRangeProps> = ({ address }) => {
  const { data } = useCurveLPPrice(address);

  const price = data?.lpPrice;

  return (
    <Div
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      flexWrap="wrap"
      gap="0.5rem"
      width="100%"
    >
      <Span color="#FFFFFF" textAlign="right">
        {formatDollars(price ?? 0)}
      </Span>
      <Tag type="success" label="In Range" />
    </Div>
  );
};

export default PriceRange;
